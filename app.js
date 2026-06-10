/* ==========================================================================
   JELET 2026 Prediction Portal Logic
   Implements Tab switching, Blueprint explorer, Solutions browser,
   and the interactive Exam Simulator with custom scoring algorithms.
   ========================================================================== */

// --- Global Application State ---
let activeTab = 'dashboard';
let currentQuestionIndex = 0;
let userAnswers = {}; // { qId: [optIndex1, optIndex2...] }
let questionStates = {}; // { qId: 'unvisited'|'unanswered'|'answered'|'review'|'answered-review' }
let examTimerInterval = null;
let secondsLeft = 7200; // 2 hours
let isExamActive = false;
let isExamSubmitted = false;

// --- DOM Content Loaded Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initBlueprintTab();
  initSolutionsTab();
  
  // Register search and filter listeners
  document.getElementById('blueprint-search').addEventListener('input', filterBlueprint);
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filterBlueprint();
    });
  });

  document.getElementById('sol-subject-filter').addEventListener('change', filterSolutions);
  document.getElementById('sol-category-filter').addEventListener('change', filterSolutions);
  document.getElementById('sol-search').addEventListener('input', filterSolutions);
});

// --- Navigation & Tab Controller ---
function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // If exam is active, prevent switching out unless confirmed
      if (isExamActive && targetTab !== 'exam') {
        if (!confirm("Your mock exam is currently active. Switching tabs will not pause the timer. Do you want to browse other pages?")) {
          return;
        }
      }
      
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  activeTab = tabId;
  
  // Update nav item active classes
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Toggle tab panes
  document.querySelectorAll('.tab-pane').forEach(pane => {
    if (pane.id === `tab-${tabId}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  // Update Page Title / Header Subtitles
  const titleEl = document.getElementById('page-title');
  const subtitleEl = document.getElementById('page-subtitle');
  
  switch(tabId) {
    case 'dashboard':
      titleEl.innerText = "Dashboard Overview";
      subtitleEl.innerText = "Historical patterns and predicted exam structure";
      break;
    case 'blueprint':
      titleEl.innerText = "Syllabus Blueprint";
      subtitleEl.innerText = "Question-by-question predictive weightage mappings";
      break;
    case 'exam':
      titleEl.innerText = isExamActive ? "Exam in Progress" : (isExamSubmitted ? "Performance Scorecard" : "Mock Exam Simulator");
      subtitleEl.innerText = isExamActive ? "Category I & II prediction testing environment" : (isExamSubmitted ? "Your test results analytics" : "Simulate the predicted JELET 2026 paper");
      break;
    case 'solutions':
      titleEl.innerText = "Solutions Explorer";
      subtitleEl.innerText = "Detailed answer keys, prediction rationales, and derivations";
      break;
  }
}

// --- Blueprint Rendering & Filter ---
function initBlueprintTab() {
  const container = document.getElementById('blueprint-list-container');
  container.innerHTML = '';

  questions.forEach(q => {
    const row = document.createElement('div');
    row.className = 'blueprint-row';
    row.setAttribute('data-id', q.id);
    row.setAttribute('data-subject', q.subject);
    row.setAttribute('data-topic', q.text); // For text search

    row.innerHTML = `
      <div class="col-q">Q${q.id}</div>
      <div class="col-subj"><span class="badge badge-${q.subject === 'electrical' ? 'eee' : q.subject.substring(0,4)}">${q.subject === 'electrical' ? 'EEE' : q.subject}</span></div>
      <div class="col-cat"><span class="badge badge-cat${q.category}">Category ${q.category === 1 ? 'I' : 'II'}</span></div>
      <div class="col-topic">${q.text.split('$').filter((item, index) => index % 2 === 0).join('').substring(0, 75)}...</div>
      <div class="col-conf"><span class="conf-${q.confidence.toLowerCase()}">${q.confidence}</span></div>
      <div class="col-expand"><button class="btn-expand" onclick="toggleBlueprintDetail(${q.id})">Details <i class="fa-solid fa-chevron-down"></i></button></div>
      <div class="blueprint-expanded-details hide" id="blueprint-detail-${q.id}">
        <div class="expanded-row">
          <div class="lbl">Predicted Topic:</div>
          <div class="val">${q.text}</div>
        </div>
        <div class="expanded-row">
          <div class="lbl">Why Predicted:</div>
          <div class="val">${q.rationale}</div>
        </div>
        <div class="expanded-row">
          <div class="lbl">Concept Level:</div>
          <div class="val">Diploma-to-Degree Transition (Moderate to Hard)</div>
        </div>
      </div>
    `;
    container.appendChild(row);
  });
  
  // Initial LaTeX typesetting
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([container]);
  }
}

function toggleBlueprintDetail(qId) {
  const details = document.getElementById(`blueprint-detail-${qId}`);
  const btn = details.previousElementSibling.querySelector('.btn-expand');
  
  if (details.classList.contains('hide')) {
    details.classList.remove('hide');
    btn.innerHTML = 'Close <i class="fa-solid fa-chevron-up"></i>';
    // Re-typeset inside details
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([details]);
    }
  } else {
    details.classList.add('hide');
    btn.innerHTML = 'Details <i class="fa-solid fa-chevron-down"></i>';
  }
}

function filterBlueprint() {
  const subjectFilter = document.querySelector('.filter-btn.active').getAttribute('data-subject');
  const searchText = document.getElementById('blueprint-search').value.toLowerCase();
  
  const rows = document.querySelectorAll('.blueprint-row');
  rows.forEach(row => {
    const subj = row.getAttribute('data-subject');
    const topicText = row.innerText.toLowerCase();
    
    const matchesSubject = (subjectFilter === 'all') || (subj === subjectFilter);
    const matchesSearch = topicText.includes(searchText);
    
    if (matchesSubject && matchesSearch) {
      row.style.display = 'grid';
    } else {
      row.style.display = 'none';
    }
  });
}

// --- Solutions Browser Rendering ---
function initSolutionsTab() {
  const container = document.getElementById('solutions-list-container');
  container.innerHTML = '';

  questions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'solution-card';
    card.setAttribute('data-id', q.id);
    card.setAttribute('data-subject', q.subject);
    card.setAttribute('data-category', q.category);
    card.setAttribute('data-text', q.text + " " + q.solution);

    // Format choices
    let choicesHtml = '';
    q.options.forEach((opt, idx) => {
      const isCorrect = q.correct.includes(idx);
      choicesHtml += `
        <div class="choice-item ${isCorrect ? 'correct' : ''}">
          <i class="fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
          <span>${String.fromCharCode(65 + idx)}. ${opt}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="solution-meta">
        <span class="q-id">Question ${q.id}</span>
        <div class="badge-list">
          <span class="badge badge-${q.subject === 'electrical' ? 'eee' : q.subject.substring(0,4)}">${q.subject === 'electrical' ? 'EEE' : q.subject}</span>
          <span class="badge badge-cat${q.category}">Category ${q.category === 1 ? 'I' : 'II'}</span>
          <span class="badge badge-cat1">Confidence: ${q.confidence}</span>
        </div>
      </div>
      <div class="solution-q-text">${q.text}</div>
      <div class="solution-choices">
        ${choicesHtml}
      </div>
      <div class="solution-box">
        <h4><i class="fa-solid fa-lightbulb"></i> Step-by-Step Explanation</h4>
        <p>${q.solution}</p>
      </div>
      <div class="rationale-box">
        <strong>Prediction Rationale:</strong> ${q.rationale}
      </div>
    `;
    container.appendChild(card);
  });

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([container]);
  }
}

function filterSolutions() {
  const subjFilter = document.getElementById('sol-subject-filter').value;
  const catFilter = document.getElementById('sol-category-filter').value;
  const searchTxt = document.getElementById('sol-search').value.toLowerCase();

  const cards = document.querySelectorAll('.solution-card');
  cards.forEach(card => {
    const subj = card.getAttribute('data-subject');
    const cat = card.getAttribute('data-category');
    const fullText = card.getAttribute('data-text').toLowerCase();

    const matchesSubj = (subjFilter === 'all') || (subj === subjFilter);
    const matchesCat = (catFilter === 'all') || (cat === catFilter);
    const matchesSearch = fullText.includes(searchTxt);

    if (matchesSubj && matchesCat && matchesSearch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// --- Interactive Exam Simulator Tab ---
function startExam() {
  // Reset states
  userAnswers = {};
  isExamSubmitted = false;
  isExamActive = true;
  currentQuestionIndex = 0;
  secondsLeft = 7200; // 120 minutes

  // Set all states to unvisited
  questions.forEach(q => {
    questionStates[q.id] = 'unvisited';
  });
  questionStates[questions[0].id] = 'unanswered'; // Mark first question as active/unanswered

  // Toggle views
  document.getElementById('exam-start-view').classList.add('hide');
  document.getElementById('exam-result-view').classList.add('hide');
  document.getElementById('exam-active-view').classList.remove('hide');
  
  // Show timer and top submit button in header
  document.getElementById('exam-timer-wrapper').classList.remove('hide');
  document.getElementById('btn-top-submit').classList.remove('hide');
  
  switchTab('exam');
  
  // Build Palette Grid
  buildPaletteGrid();
  
  // Load First Question
  loadQuestion(0);
  
  // Start Timer
  startTimer();
}

function startTimer() {
  clearInterval(examTimerInterval);
  updateTimerDisplay();
  
  examTimerInterval = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();
    
    if (secondsLeft <= 0) {
      clearInterval(examTimerInterval);
      alert("Time is up! Your answers will be submitted automatically.");
      autoSubmitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const h = Math.floor(secondsLeft / 3600).toString().padStart(2, '0');
  const m = Math.floor((secondsLeft % 3600) / 60).toString().padStart(2, '0');
  const s = (secondsLeft % 60).toString().padStart(2, '0');
  document.getElementById('exam-timer').innerText = `${h}:${m}:${s}`;
}

function buildPaletteGrid() {
  const container = document.getElementById('q-grid-palette');
  container.innerHTML = '';

  questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = `q-btn unvisited`;
    btn.id = `palette-btn-${idx}`;
    btn.innerText = idx + 1;
    btn.setAttribute('data-id', q.id);
    btn.setAttribute('data-subject', q.subject);
    
    btn.addEventListener('click', () => {
      saveCurrentQuestionState();
      loadQuestion(idx);
    });
    
    container.appendChild(btn);
  });
  updatePaletteStyles();
}

function filterPalette(subject) {
  document.querySelectorAll('.palette-filters .p-filter').forEach(btn => {
    btn.classList.remove('active');
  });
  // Highlight active filter button
  event.target.classList.add('active');

  const buttons = document.querySelectorAll('#q-grid-palette .q-btn');
  buttons.forEach(btn => {
    const subj = btn.getAttribute('data-subject');
    
    let matches = false;
    if (subject === 'all') matches = true;
    else if (subject === 'math' && subj === 'mathematics') matches = true;
    else if (subject === 'phys' && subj === 'physics') matches = true;
    else if (subject === 'chem' && subj === 'chemistry') matches = true;
    else if (subject === 'eee' && subj === 'electrical') matches = true;
    
    if (matches) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });
}

function loadQuestion(index) {
  currentQuestionIndex = index;
  const q = questions[index];
  
  // If unvisited, change state to unanswered
  if (questionStates[q.id] === 'unvisited') {
    questionStates[q.id] = 'unanswered';
  }
  
  // Render text
  document.getElementById('current-q-num').innerText = `Question ${index + 1}`;
  document.getElementById('current-q-subj').innerText = q.subject === 'electrical' ? 'Electrical & Electronics' : q.subject;
  document.getElementById('current-q-subj').className = `badge badge-${q.subject === 'electrical' ? 'eee' : q.subject.substring(0,4)}`;
  
  document.getElementById('current-q-cat').innerText = `Category ${q.category === 1 ? 'I (1 Mark)' : 'II (2 Marks)'}`;
  document.getElementById('current-q-cat').className = `badge badge-cat${q.category}`;
  
  document.getElementById('current-q-type').innerHTML = q.category === 1 ? 
    `<i class="fa-solid fa-circle-check"></i> Single Choice (Negative Mark: -0.25)` : 
    `<i class="fa-solid fa-list-check"></i> Multiple Choice (No Negative Mark)`;
  
  document.getElementById('current-q-text').innerHTML = q.text;

  // Options
  const optionsContainer = document.getElementById('current-q-options');
  optionsContainer.innerHTML = '';

  const savedSelections = userAnswers[q.id] || [];

  q.options.forEach((opt, oIdx) => {
    const item = document.createElement('div');
    item.className = `option-item ${savedSelections.includes(oIdx) ? 'selected' : ''}`;
    
    item.innerHTML = `
      <div class="option-marker">${String.fromCharCode(65 + oIdx)}</div>
      <div class="option-text">${opt}</div>
    `;
    
    item.addEventListener('click', () => {
      toggleOptionSelection(q.id, oIdx, q.category);
    });
    
    optionsContainer.appendChild(item);
  });

  // Highlight active palette button
  updatePaletteStyles();
  
  // Typeset math equations
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([document.getElementById('current-q-text'), optionsContainer]);
  }
}

function toggleOptionSelection(qId, oIdx, category) {
  if (!userAnswers[qId]) {
    userAnswers[qId] = [];
  }
  
  const indexInSelections = userAnswers[qId].indexOf(oIdx);
  
  if (category === 1) {
    // Category I: Single Choice
    if (indexInSelections > -1) {
      userAnswers[qId] = []; // Deselect
    } else {
      userAnswers[qId] = [oIdx]; // Choose this option only
    }
  } else {
    // Category II: Multiple Choice
    if (indexInSelections > -1) {
      userAnswers[qId].splice(indexInSelections, 1); // Deselect
    } else {
      userAnswers[qId].push(oIdx); // Toggle choice
    }
  }

  // Update states
  const selectionsCount = userAnswers[qId].length;
  if (selectionsCount > 0) {
    if (questionStates[qId] === 'review') {
      questionStates[qId] = 'answered-review';
    } else if (questionStates[qId] !== 'answered-review') {
      questionStates[qId] = 'answered';
    }
  } else {
    if (questionStates[qId] === 'answered-review') {
      questionStates[qId] = 'review';
    } else if (questionStates[qId] === 'answered') {
      questionStates[qId] = 'unanswered';
    }
  }

  // Reload options to reflect selected UI state
  loadQuestion(currentQuestionIndex);
}

function saveCurrentQuestionState() {
  // State is updated reactively, so this serves to check palette styles
  updatePaletteStyles();
}

function updatePaletteStyles() {
  questions.forEach((q, idx) => {
    const btn = document.getElementById(`palette-btn-${idx}`);
    if (!btn) return;
    
    const state = questionStates[q.id] || 'unvisited';
    
    btn.className = `q-btn ${state}`;
    if (currentQuestionIndex === idx) {
      btn.classList.add('active');
    }
  });
}

function prevQuestion() {
  saveCurrentQuestionState();
  if (currentQuestionIndex > 0) {
    loadQuestion(currentQuestionIndex - 1);
  } else {
    alert("This is the first question.");
  }
}

function nextQuestion() {
  saveCurrentQuestionState();
  if (currentQuestionIndex < questions.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  } else {
    alert("You have reached the end of the test. Review your answers and click submit.");
  }
}

function markForReview() {
  const q = questions[currentQuestionIndex];
  const answered = (userAnswers[q.id] && userAnswers[q.id].length > 0);
  
  if (questionStates[q.id] === 'review' || questionStates[q.id] === 'answered-review') {
    // Unmark review
    questionStates[q.id] = answered ? 'answered' : 'unanswered';
  } else {
    // Mark review
    questionStates[q.id] = answered ? 'answered-review' : 'review';
  }
  updatePaletteStyles();
}

function clearAnswers() {
  const q = questions[currentQuestionIndex];
  userAnswers[q.id] = [];
  
  if (questionStates[q.id] === 'answered-review') {
    questionStates[q.id] = 'review';
  } else {
    questionStates[q.id] = 'unanswered';
  }
  loadQuestion(currentQuestionIndex);
}

// --- Scoring and Submission ---
function submitExam() {
  if (confirm("Are you sure you want to submit the exam? You will not be able to change your answers.")) {
    autoSubmitExam();
  }
}

function autoSubmitExam() {
  clearInterval(examTimerInterval);
  isExamActive = false;
  isExamSubmitted = true;
  
  // Hide timer and submit button
  document.getElementById('exam-timer-wrapper').classList.add('hide');
  document.getElementById('btn-top-submit').classList.add('hide');
  
  // Calculate Results
  const results = calculateScores();
  renderResultsScorecard(results);
  
  // Show Result Tab view
  document.getElementById('exam-active-view').classList.add('hide');
  document.getElementById('exam-result-view').classList.remove('hide');
  
  switchTab('exam');
}

function calculateScores() {
  let totalScore = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let negativeMarks = 0;
  let attemptedCount = 0;

  // Subject-wise tracking
  const subjects = {
    mathematics: { score: 0, total: 50, correct: 0, wrong: 0 },
    physics: { score: 0, total: 35, correct: 0, wrong: 0 },
    chemistry: { score: 0, total: 25, correct: 0, wrong: 0 },
    electrical: { score: 0, total: 10, correct: 0, wrong: 0 }
  };

  questions.forEach(q => {
    const selected = userAnswers[q.id] || [];
    const correct = q.correct || [];
    
    if (selected.length > 0) {
      attemptedCount++;
      
      if (q.category === 1) {
        // --- Category I Rules ---
        // Single selection allowed. Check if correct.
        if (selected.length === 1 && selected[0] === correct[0]) {
          totalScore += 1;
          correctCount++;
          subjects[q.subject].score += 1;
          subjects[q.subject].correct += 1;
        } else {
          totalScore -= 0.25;
          negativeMarks += 0.25;
          incorrectCount++;
          subjects[q.subject].score -= 0.25;
          subjects[q.subject].wrong += 1;
        }
      } else {
        // --- Category II Rules ---
        // Multiple correct options possible. No negative marks.
        // If any incorrect is selected, score is 0.
        const hasWrongSelection = selected.some(sIdx => !correct.includes(sIdx));
        
        if (hasWrongSelection) {
          incorrectCount++;
          subjects[q.subject].wrong += 1;
        } else {
          // If only correct ones are marked:
          const markedCorrectCount = selected.length;
          const actualCorrectCount = correct.length;
          
          if (markedCorrectCount === actualCorrectCount) {
            totalScore += 2;
            correctCount++;
            subjects[q.subject].score += 2;
            subjects[q.subject].correct += 1;
          } else {
            // Partial marks
            const partialMark = 2.0 * (markedCorrectCount / actualCorrectCount);
            totalScore += partialMark;
            correctCount++; // Treat partial correct as correct for count
            subjects[q.subject].score += partialMark;
            subjects[q.subject].correct += 1;
          }
        }
      }
    }
  });

  return {
    totalScore: Math.max(0, totalScore).toFixed(2), // Score cannot be negative overall
    correctCount,
    incorrectCount,
    negativeMarks: negativeMarks.toFixed(2),
    attemptedCount,
    subjects
  };
}

function renderResultsScorecard(results) {
  document.getElementById('result-score').innerText = `${results.totalScore} / 120`;
  document.getElementById('result-attempted').innerText = `${results.attemptedCount} / 100`;
  document.getElementById('result-correct').innerText = results.correctCount;
  document.getElementById('result-incorrect').innerText = results.incorrectCount;
  document.getElementById('result-negative').innerText = `-${results.negativeMarks}`;

  const isPass = results.totalScore >= 30.0;
  const statusBadge = document.getElementById('result-status');
  statusBadge.className = `status-badge ${isPass ? 'pass' : 'fail'}`;
  statusBadge.innerText = isPass ? 'PASS' : 'FAIL';

  // Render subject breakdown cards
  const breakdownContainer = document.getElementById('result-breakdown-container');
  breakdownContainer.innerHTML = '';

  const subjKeys = ['mathematics', 'physics', 'chemistry', 'electrical'];
  subjKeys.forEach(key => {
    const data = results.subjects[key];
    const percentage = ((data.score / data.total) * 100).toFixed(1);
    const item = document.createElement('div');
    item.className = 'breakdown-item';
    
    item.innerHTML = `
      <h4>${key === 'electrical' ? 'Electrical / Electronics' : key.charAt(0).toUpperCase() + key.slice(1)}</h4>
      <p class="score">${data.score.toFixed(2)} / ${data.total}</p>
      <p class="pct">${Math.max(0, percentage)}% Accuracy</p>
    `;
    breakdownContainer.appendChild(item);
  });
}

function showExamSolutions() {
  switchTab('solutions');
  // Auto filter solutions to show what the user did
  // Find all cards and highlight user choice compared to correct choice
  questions.forEach(q => {
    const card = document.querySelector(`.solution-card[data-id="${q.id}"]`);
    if (!card) return;
    
    const userSelected = userAnswers[q.id] || [];
    
    // Clear old markings
    card.querySelectorAll('.choice-item').forEach((item, idx) => {
      item.classList.remove('incorrect-marked');
      // If user selected this and it was wrong, color red
      if (userSelected.includes(idx) && !q.correct.includes(idx)) {
        item.classList.add('incorrect-marked');
      }
    });
  });
}

function restartExam() {
  if (confirm("Retaking the mock exam will wipe out your current answers. Proceed?")) {
    startExam();
  }
}
