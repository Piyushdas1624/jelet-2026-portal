// JELET 2026 Priority Practice Exam Engine
let currentQuestionIndex = 0;
let userAnswers = {}; // { qId: [optIndex1, optIndex2...] }
let questionStates = {}; // { qId: 'unvisited'|'answered'|'review'|'answered-review' }
let secondsLeft = 3600; // 60 minutes
let examInterval = null;
let isExamSubmitted = false;

function startExam() {
  userAnswers = {};
  questionStates = {};
  isExamSubmitted = false;
  currentQuestionIndex = 0;
  secondsLeft = 3600;

  priorityQuestions.forEach(q => {
    questionStates[q.id] = 'unvisited';
  });

  document.getElementById('start-view').classList.add('hide');
  document.getElementById('active-view').classList.remove('hide');
  document.getElementById('exam-timer-container').classList.remove('hide');
  document.getElementById('btn-submit').classList.remove('hide');

  buildPalette();
  loadQuestion(0);
  startTimer();
}

function startTimer() {
  clearInterval(examInterval);
  updateTimerDisplay();

  examInterval = setInterval(() => {
    secondsLeft--;
    updateTimerDisplay();

    if (secondsLeft <= 0) {
      clearInterval(examInterval);
      alert("Time is up! Your answers will be submitted automatically.");
      autoSubmit();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const h = Math.floor(secondsLeft / 3600).toString().padStart(2, '0');
  const m = Math.floor((secondsLeft % 3600) / 60).toString().padStart(2, '0');
  const s = (secondsLeft % 60).toString().padStart(2, '0');
  document.getElementById('exam-timer').innerText = `${h}:${m}:${s}`;
}

function buildPalette() {
  const container = document.getElementById('palette-grid-container');
  container.innerHTML = '';

  priorityQuestions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = `palette-btn`;
    btn.id = `palette-btn-${idx}`;
    btn.innerText = idx + 1;
    btn.addEventListener('click', () => {
      loadQuestion(idx);
    });
    container.appendChild(btn);
  });
  updatePaletteStyles();
}

function updatePaletteStyles() {
  priorityQuestions.forEach((q, idx) => {
    const btn = document.getElementById(`palette-btn-${idx}`);
    if (!btn) return;

    const state = questionStates[q.id] || 'unvisited';
    btn.className = `palette-btn ${state}`;

    if (currentQuestionIndex === idx) {
      btn.classList.add('active');
    }
  });
}

function loadQuestion(index) {
  currentQuestionIndex = index;
  const q = priorityQuestions[index];

  document.getElementById('q-number-title').innerText = `Question ${index + 1} of ${priorityQuestions.length}`;
  
  const subjBadge = document.getElementById('q-subject-badge');
  subjBadge.innerText = q.subject === 'electrical' ? 'FEEE' : q.subject;
  subjBadge.className = `badge badge-${q.subject === 'electrical' ? 'eee' : q.subject.substring(0,4)}`;

  const catBadge = document.getElementById('q-cat-badge');
  catBadge.innerText = q.category === 1 ? 'Category I (1 Mark)' : 'Category II (2 Marks)';

  document.getElementById('q-text-content').innerHTML = q.text;

  const optionsContainer = document.getElementById('q-options-container');
  optionsContainer.innerHTML = '';

  const savedSelections = userAnswers[q.id] || [];

  q.options.forEach((opt, oIdx) => {
    const card = document.createElement('div');
    card.className = `option-card ${savedSelections.includes(oIdx) ? 'selected' : ''}`;
    card.innerHTML = `
      <div class="option-marker">${String.fromCharCode(65 + oIdx)}</div>
      <div class="option-text">${opt}</div>
    `;
    card.addEventListener('click', () => {
      toggleOption(oIdx);
    });
    optionsContainer.appendChild(card);
  });

  updatePaletteStyles();

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([document.getElementById('q-text-content'), optionsContainer]);
  }
}

function toggleOption(oIdx) {
  if (isExamSubmitted) return;

  const q = priorityQuestions[currentQuestionIndex];
  if (!userAnswers[q.id]) {
    userAnswers[q.id] = [];
  }

  const indexInSelections = userAnswers[q.id].indexOf(oIdx);

  if (q.category === 1) {
    // Category I: Single Choice
    if (indexInSelections > -1) {
      userAnswers[q.id] = [];
    } else {
      userAnswers[q.id] = [oIdx];
    }
  } else {
    // Category II: Multiple Choice
    if (indexInSelections > -1) {
      userAnswers[q.id].splice(indexInSelections, 1);
    } else {
      userAnswers[q.id].push(oIdx);
    }
  }

  // Update states
  const count = userAnswers[q.id].length;
  const oldState = questionStates[q.id];

  if (count > 0) {
    if (oldState === 'review') {
      questionStates[q.id] = 'answered-review';
    } else if (oldState !== 'answered-review') {
      questionStates[q.id] = 'answered';
    }
  } else {
    if (oldState === 'answered-review') {
      questionStates[q.id] = 'review';
    } else if (oldState === 'answered') {
      questionStates[q.id] = 'unvisited';
    }
  }

  loadQuestion(currentQuestionIndex);
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    loadQuestion(currentQuestionIndex - 1);
  }
}

function nextQuestion() {
  if (currentQuestionIndex < priorityQuestions.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  }
}

function toggleReview() {
  const q = priorityQuestions[currentQuestionIndex];
  const oldState = questionStates[q.id];
  const answered = userAnswers[q.id] && userAnswers[q.id].length > 0;

  if (oldState === 'review' || oldState === 'answered-review') {
    questionStates[q.id] = answered ? 'answered' : 'unvisited';
  } else {
    questionStates[q.id] = answered ? 'answered-review' : 'review';
  }
  updatePaletteStyles();
}

function submitExam() {
  if (confirm("Are you sure you want to submit the practice test? You cannot change your answers afterward.")) {
    autoSubmit();
  }
}

function autoSubmit() {
  clearInterval(examInterval);
  isExamSubmitted = true;

  document.getElementById('exam-timer-container').classList.add('hide');
  document.getElementById('btn-submit').classList.add('hide');

  document.getElementById('active-view').classList.add('hide');
  document.getElementById('result-view').classList.remove('hide');

  const results = calculateScores();
  renderResults(results);
}

function calculateScores() {
  let totalScore = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  let attemptedCount = 0;
  let totalPossible = 0;

  const subjects = {
    mathematics: { score: 0, total: 0 },
    physics: { score: 0, total: 0 },
    chemistry: { score: 0, total: 0 },
    electrical: { score: 0, total: 0 }
  };

  priorityQuestions.forEach(q => {
    totalPossible += q.category;
    subjects[q.subject].total += q.category;

    const selected = userAnswers[q.id] || [];
    const correct = q.correct || [];

    if (selected.length > 0) {
      attemptedCount++;

      if (q.category === 1) {
        // Category I Rules: Single choice
        if (selected.length === 1 && selected[0] === correct[0]) {
          totalScore += 1;
          correctCount++;
          subjects[q.subject].score += 1;
        } else {
          totalScore -= 0.25;
          incorrectCount++;
          subjects[q.subject].score -= 0.25;
        }
      } else {
        // Category II Rules: Multi choice
        const hasWrong = selected.some(s => !correct.includes(s));
        if (hasWrong) {
          incorrectCount++;
        } else {
          const marked = selected.length;
          const actual = correct.length;
          if (marked === actual) {
            totalScore += 2;
            correctCount++;
            subjects[q.subject].score += 2;
          } else {
            const partial = 2.0 * (marked / actual);
            totalScore += partial;
            correctCount++;
            subjects[q.subject].score += partial;
          }
        }
      }
    }
  });

  return {
    score: Math.max(0, totalScore).toFixed(2),
    possible: totalPossible,
    correct: correctCount,
    incorrect: incorrectCount,
    attempted: attemptedCount,
    subjects
  };
}

function renderResults(results) {
  document.getElementById('res-score').innerText = `${results.score} / ${results.possible}`;
  document.getElementById('res-attempted').innerText = `${results.attempted} / ${priorityQuestions.length}`;
  
  const accuracy = results.attempted > 0 ? ((results.correct / results.attempted) * 100).toFixed(1) : 0;
  document.getElementById('res-accuracy').innerText = `${accuracy}%`;

  const breakdownContainer = document.getElementById('subject-breakdown-container');
  breakdownContainer.innerHTML = '';

  const keys = ['mathematics', 'physics', 'chemistry', 'electrical'];
  keys.forEach(k => {
    const data = results.subjects[k];
    const subjName = k === 'electrical' ? 'FEEE' : k.charAt(0).toUpperCase() + k.slice(1);
    const row = document.createElement('div');
    row.className = 'breakdown-row';
    row.innerHTML = `
      <span>${subjName} Focus</span>
      <strong>${Math.max(0, data.score).toFixed(2)} / ${data.total}</strong>
    `;
    breakdownContainer.appendChild(row);
  });
}

function revealDetailedSolutions() {
  document.getElementById('solutions-explanations').classList.remove('hide');
  
  const list = document.getElementById('solutions-list-container');
  list.innerHTML = '';

  priorityQuestions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'sol-card';

    const selected = userAnswers[q.id] || [];
    const correct = q.correct || [];
    let isCorrect = false;

    if (q.category === 1) {
      isCorrect = selected.length === 1 && selected[0] === correct[0];
    } else {
      isCorrect = selected.length > 0 && !selected.some(s => !correct.includes(s)) && selected.length === correct.length;
    }

    const selectedLetters = selected.map(idx => String.fromCharCode(65 + idx)).join(', ') || 'None';
    const correctLetters = correct.map(idx => String.fromCharCode(65 + idx)).join(', ');

    card.innerHTML = `
      <div class="num-header">
        <span>Question ${idx + 1} (${q.subject === 'electrical' ? 'FEEE' : q.subject.charAt(0).toUpperCase() + q.subject.slice(1)})</span>
        <span class="status-text ${isCorrect ? 'status-correct' : 'status-incorrect'}">${isCorrect ? 'Correct' : 'Incorrect/Partial'}</span>
      </div>
      <p style="margin-bottom: 8px;"><strong>Question:</strong> ${q.text}</p>
      <p style="font-size: 13.5px; color: var(--text-muted);">
        Your Answer: <strong style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'};">${selectedLetters}</strong> | 
        Correct Answer: <strong style="color: var(--success);">${correctLetters}</strong>
      </p>
      <div class="sol-box">
        <h4><i class="fa-solid fa-lightbulb"></i> Step-by-Step Derivation</h4>
        <p>${q.solution}</p>
      </div>
    `;
    list.appendChild(card);
  });

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([list]);
  }
}
