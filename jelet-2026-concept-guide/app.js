/* ==========================================================================
   JELET 2026 Concept Guide App Script
   Implements card rendering, accordion toggle, subject filter, search,
   and localStorage-backed progress/mastery stats tracking.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderConcepts();
  updateStats();

  // Register Search Listener
  document.getElementById('concept-search').addEventListener('input', filterConcepts);

  // Register Filter Button Listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filterConcepts();
    });
  });
});

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
  const activeSubject = document.querySelector('.filter-btn.active').getAttribute('data-subject');
  const searchText = document.getElementById('concept-search').value.toLowerCase();
  const cards = document.querySelectorAll('.concept-card');

  cards.forEach(card => {
    const subj = card.getAttribute('data-subject');
    const searchData = card.getAttribute('data-search').toLowerCase();

    const matchesSubject = (activeSubject === 'all') || (subj === activeSubject);
    const matchesSearch = searchData.includes(searchText);

    if (matchesSubject && matchesSearch) {
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
    progressFill.style.width = `${(masteredIds.length / 40) * 100}%`;
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
