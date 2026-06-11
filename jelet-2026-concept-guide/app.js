/* ==========================================================================
   JELET 2026 Concept Guide App Script
   Implements card rendering, accordion toggle, subject filter, search,
   and localStorage-backed progress/mastery stats tracking.
   ========================================================================== */

const subjectChapters = {
  mathematics: [
    "Matrices & Determinants",
    "Complex Numbers",
    "Coordinate Geometry",
    "Vector Algebra",
    "Differential Calculus",
    "Integral Calculus",
    "Ordinary Differential Equations",
    "Probability"
  ],
  physics: [
    "Units, Dimensions & Measurement",
    "Classical Mechanics",
    "Work, Power & Energy",
    "Gravitation",
    "Properties of Matter & Fluid Mechanics",
    "Thermodynamics & Heat Transfer",
    "Oscillations & Waves",
    "Optics",
    "Modern Physics"
  ],
  chemistry: [
    "Atomic Structure",
    "Chemical Bonding",
    "Chemical Equilibrium & Solutions",
    "Electrochemistry & Redox",
    "Organic Chemistry",
    "Industrial & Applied Chemistry"
  ],
  electrical: [
    "Network Theory & DC Circuits",
    "AC Circuits & Phasors",
    "Electrical Machines",
    "Electrical Measurements & Instruments",
    "Analog Electronics & Op-Amps",
    "Digital Electronics"
  ]
};

function tagConceptsWithChapters(conceptsList) {
  conceptsList.forEach(c => {
    let chapter = "General";
    if (c.subject === 'mathematics') {
      if ([1, 2, 5].includes(c.id)) chapter = "Matrices & Determinants";
      else if ([10].includes(c.id)) chapter = "Complex Numbers";
      else if ([14, 41, 42].includes(c.id)) chapter = "Coordinate Geometry";
      else if ([13].includes(c.id)) chapter = "Vector Algebra";
      else if ([3, 6, 7].includes(c.id)) chapter = "Differential Calculus";
      else if ([8, 9, 12].includes(c.id)) chapter = "Integral Calculus";
      else if ([4].includes(c.id)) chapter = "Ordinary Differential Equations";
      else if ([11].includes(c.id)) chapter = "Probability";
    } else if (c.subject === 'physics') {
      if ([17, 19].includes(c.id)) chapter = "Classical Mechanics";
      else if ([18].includes(c.id)) chapter = "Work, Power & Energy";
      else if ([21].includes(c.id)) chapter = "Gravitation";
      else if ([15, 24].includes(c.id)) chapter = "Properties of Matter & Fluid Mechanics";
      else if ([20, 43].includes(c.id)) chapter = "Thermodynamics & Heat Transfer";
      else if ([22].includes(c.id)) chapter = "Oscillations & Waves";
      else if ([23].includes(c.id)) chapter = "Optics";
      else if ([16].includes(c.id)) chapter = "Modern Physics";
    } else if (c.subject === 'chemistry') {
      if ([25, 26].includes(c.id)) chapter = "Atomic Structure";
      else if ([27, 32].includes(c.id)) chapter = "Chemical Bonding"; // Oxyacids strength is inorganic structure/bonding
      else if ([28, 29, 33, 44].includes(c.id)) chapter = "Chemical Equilibrium & Solutions";
      else if ([31].includes(c.id)) chapter = "Electrochemistry & Redox";
      else if ([30].includes(c.id)) chapter = "Organic Chemistry";
    } else if (c.subject === 'electrical') {
      if ([34].includes(c.id)) chapter = "Network Theory & DC Circuits";
      else if ([37, 45].includes(c.id)) chapter = "AC Circuits & Phasors";
      else if ([35, 40].includes(c.id)) chapter = "Electrical Machines";
      else if ([38, 39].includes(c.id)) chapter = "Analog Electronics & Op-Amps";
      else if ([36].includes(c.id)) chapter = "Digital Electronics";
    }
    c.chapter = chapter;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  tagConceptsWithChapters(concepts);
  renderConcepts();
  updateStats();

  // Register Search Listener
  document.getElementById('concept-search').addEventListener('input', filterConcepts);

  // Register Filter Button Listeners
  document.querySelectorAll('.subject-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.subject-filters .filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const subj = e.target.getAttribute('data-subject');
      updateConceptChaptersDropdown(subj);
      filterConcepts();
    });
  });

  // Register Chapter Select Listener
  document.getElementById('concept-chapter-select').addEventListener('change', filterConcepts);
});

function updateConceptChaptersDropdown(subject) {
  const wrapper = document.getElementById('concept-chapter-filter-wrapper');
  const select = document.getElementById('concept-chapter-select');
  
  if (subject === 'all') {
    wrapper.classList.add('hide');
    select.value = 'all';
    return;
  }
  
  // Clear and rebuild options
  select.innerHTML = '<option value="all">All Chapters</option>';
  
  const chapters = subjectChapters[subject] || [];
  chapters.forEach(chap => {
    const opt = document.createElement('option');
    opt.value = chap;
    opt.innerText = chap;
    select.appendChild(opt);
  });
  
  wrapper.classList.remove('hide');
  select.value = 'all';
}

function renderConcepts() {
  const container = document.getElementById('concepts-container');
  container.innerHTML = '';

  const masteredIds = JSON.parse(localStorage.getItem('jelet_mastered_concepts') || '[]');

  concepts.forEach(c => {
    const card = document.createElement('article');
    card.className = 'concept-card';
    if (masteredIds.includes(c.id)) {
      card.classList.add('mastered');
    }
    card.setAttribute('data-id', c.id);
    card.setAttribute('data-subject', c.subject);
    card.setAttribute('data-search', c.title + " " + c.desc + " " + c.steps.join(' ') + " " + c.proTip);

    // Build formulas list
    let formulasHtml = '';
    if (c.formulas && c.formulas.length > 0) {
      formulasHtml = `
        <div class="recipe-section">
          <h3>Essential Formulas to Memorize</h3>
          <div class="formulas-box">
            <ul>
              ${c.formulas.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }

    // Build steps list with dynamic timeline dots
    const stepsHtml = `
      <div class="recipe-section">
        <h3>Step-by-Step Solving Algorithm (The Recipe)</h3>
        <ol class="steps-list">
          ${c.steps.map((step, idx) => `
            <li class="step-item">
              <span class="step-number">${idx + 1}</span>
              <span class="step-text">${step}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    `;

    // Build worked example
    const exampleHtml = `
      <div class="recipe-section">
        <h3>Typical Worked Example</h3>
        <div class="example-box">
          <p><strong>Problem:</strong></p>
          <p>${c.example.text.replace(/\n/g, '<br>')}</p>
          <div class="solution">
            <p><strong>Step-by-Step Solution:</strong></p>
            <p>${c.example.solution.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      </div>
    `;

    // Build pro-tip
    const proTipHtml = `
      <div class="pro-tip-box">
        <i class="fa-solid fa-lightbulb"></i>
        <div>
          <strong>SME Pro-Tip:</strong> ${c.proTip}
        </div>
      </div>
    `;

    // Query for YouTube
    const ytQuery = c.youtubeQuery ? c.youtubeQuery : encodeURIComponent(c.title);

    card.innerHTML = `
      <div class="concept-header">
        <div class="concept-title-group">
          <span class="badge badge-${c.subject === 'electrical' ? 'eee' : c.subject.substring(0,4)}">${c.subject === 'electrical' ? 'EEE' : c.subject}</span>
          <h2>${c.title}</h2>
        </div>
        <div class="header-actions">
          <label class="mastery-checkbox-container" onclick="event.stopPropagation()">
            <input type="checkbox" class="cb-mastery" ${masteredIds.includes(c.id) ? 'checked' : ''} onchange="toggleMastery(${c.id}, this)">
            <span class="checkbox-custom"></span>
            <span class="checkbox-label">Mastered</span>
          </label>
          <a href="https://www.youtube.com/results?search_query=JELET+${ytQuery}" target="_blank" class="btn-youtube" onclick="event.stopPropagation()">
            <i class="fa-brands fa-youtube"></i> Video Tutorial
          </a>
          <button class="btn-reveal" onclick="toggleRecipe(${c.id})">
            <span>Reveal Solving Recipe</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <p class="concept-desc">${c.desc}</p>
      
      <div class="concept-recipe" id="recipe-${c.id}">
        ${formulasHtml}
        ${stepsHtml}
        ${exampleHtml}
        ${proTipHtml}
      </div>
    `;

    container.appendChild(card);
  });

  // Initial Typeset
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([container]);
  }
}

function toggleRecipe(id) {
  const card = document.querySelector(`.concept-card[data-id="${id}"]`);
  const recipe = document.getElementById(`recipe-${id}`);
  const btnSpan = card.querySelector('.btn-reveal span');
  
  if (card.classList.contains('active')) {
    card.classList.remove('active');
    btnSpan.innerText = "Reveal Solving Recipe";
  } else {
    card.classList.add('active');
    btnSpan.innerText = "Collapse Recipe";
    // Typeset formulas and equations inside the newly revealed drawer
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([recipe]);
    }
  }
}

function filterConcepts() {
  const activeSubject = document.querySelector('.subject-filters .filter-btn.active').getAttribute('data-subject');
  const activeChapter = document.getElementById('concept-chapter-select').value;
  const searchText = document.getElementById('concept-search').value.toLowerCase();
  const cards = document.querySelectorAll('.concept-card');

  cards.forEach(card => {
    const subj = card.getAttribute('data-subject');
    const cardId = parseInt(card.getAttribute('data-id'), 10);
    const conceptObj = concepts.find(c => c.id === cardId);
    const chapter = conceptObj ? conceptObj.chapter : 'General';
    const searchData = card.getAttribute('data-search').toLowerCase();

    const matchesSubject = (activeSubject === 'all') || (subj === activeSubject);
    const matchesChapter = (activeChapter === 'all') || (chapter === activeChapter);
    const matchesSearch = searchData.includes(searchText);

    if (matchesSubject && matchesChapter && matchesSearch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function toggleMastery(id, checkbox) {
  let masteredIds = JSON.parse(localStorage.getItem('jelet_mastered_concepts') || '[]');
  const card = document.querySelector(`.concept-card[data-id="${id}"]`);
  
  if (checkbox.checked) {
    if (!masteredIds.includes(id)) masteredIds.push(id);
    card.classList.add('mastered');
  } else {
    masteredIds = masteredIds.filter(item => item !== id);
    card.classList.remove('mastered');
  }
  
  localStorage.setItem('jelet_mastered_concepts', JSON.stringify(masteredIds));
  updateStats();
}

function updateStats() {
  const masteredIds = JSON.parse(localStorage.getItem('jelet_mastered_concepts') || '[]');
  
  // Update overall count
  const countEl = document.getElementById('mastered-count');
  if (countEl) countEl.innerText = masteredIds.length;
  
  const progressFill = document.getElementById('progress-bar-fill');
  if (progressFill) {
    progressFill.style.width = `${(masteredIds.length / 45) * 100}%`;
  }
  
  let mathCount = 0;
  let physCount = 0;
  let chemCount = 0;
  let eeeCount = 0;
  
  concepts.forEach(c => {
    if (masteredIds.includes(c.id)) {
      if (c.subject === 'mathematics') mathCount++;
      else if (c.subject === 'physics') physCount++;
      else if (c.subject === 'chemistry') chemCount++;
      else if (c.subject === 'electrical') eeeCount++;
    }
  });
  
  // Update subject items
  const mathEl = document.getElementById('math-mastered');
  if (mathEl) mathEl.innerText = mathCount;
  
  const physEl = document.getElementById('phys-mastered');
  if (physEl) physEl.innerText = physCount;
  
  const chemEl = document.getElementById('chem-mastered');
  if (chemEl) chemEl.innerText = chemCount;
  
  const eeeEl = document.getElementById('eee-mastered');
  if (eeeEl) eeeEl.innerText = eeeCount;
  
  // Calculate weighted score coverage
  // Math: 1.8 | Phys: 1.5 | Chem: 1.1 | EEE: 1.4
  const score = (mathCount * 1.8) + (physCount * 1.5) + (chemCount * 1.1) + (eeeCount * 1.4);
  
  const scoreEl = document.getElementById('score-coverage');
  if (scoreEl) {
    scoreEl.innerText = score.toFixed(1);
  }
}
