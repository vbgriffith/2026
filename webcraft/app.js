/* ═══════════════════════════════════════════════════════
   WebCraft — Application Controller
   Manages screens, lessons, editor, quiz, progress
════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Constants ────────────────────────────────────────
  const STORAGE_KEY = 'webcraft_progress_v1';
  const TRACKS = {
    html: HTML_LESSONS,
    css:  CSS_LESSONS,
    js:   JS_LESSONS,
  };

  // ── State ────────────────────────────────────────────
  let state = {
    currentTrack:   null,   // 'html' | 'css' | 'js'
    currentLessonId: null,
    editorTab:      'html', // active tab in editor
    editors:        {},     // { html: CM, css: CM, js: CM }
    editorCode:     {},     // { html: '', css: '', js: '' }
    quizAnswered:   false,
    quizCorrect:    false,
    resizing:       false,
    resizeStartX:   0,
    resizeStartW:   0,
  };

  // ── Progress (localStorage) ──────────────────────────
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }
  function saveProgress(progress) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
    catch {}
  }
  function markLessonComplete(lessonId) {
    const p = loadProgress();
    p[lessonId] = true;
    saveProgress(p);
  }
  function isComplete(lessonId) {
    return !!loadProgress()[lessonId];
  }

  // ── All lessons flat list ────────────────────────────
  function getAllLessons(trackKey) {
    const track = TRACKS[trackKey];
    return track.levels.flatMap(level => level.lessons);
  }
  function getLessonById(trackKey, lessonId) {
    return getAllLessons(trackKey).find(l => l.id === lessonId) || null;
  }
  function getLessonIndex(trackKey, lessonId) {
    return getAllLessons(trackKey).findIndex(l => l.id === lessonId);
  }
  function getLevelForLesson(trackKey, lessonId) {
    const track = TRACKS[trackKey];
    for (const level of track.levels) {
      if (level.lessons.some(l => l.id === lessonId)) return level;
    }
    return null;
  }
  function countDone(trackKey) {
    const all = getAllLessons(trackKey);
    return all.filter(l => isComplete(l.id)).length;
  }

  // ── Screen routing ───────────────────────────────────
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  // ══════════════════════════════════════════════════════
  //  LANDING SCREEN
  // ══════════════════════════════════════════════════════
  function renderLanding() {
    showScreen('app-landing');

    const totalAll = Object.keys(TRACKS).reduce((s, k) => s + getAllLessons(k).length, 0);
    const doneAll  = Object.keys(TRACKS).reduce((s, k) => s + countDone(k), 0);

    ['html', 'css', 'js'].forEach(key => {
      const all  = getAllLessons(key).length;
      const done = countDone(key);
      const pct  = all ? Math.round(done / all * 100) : 0;

      document.getElementById(`${key}-done`).textContent  = done;
      document.getElementById(`${key}-total`).textContent = all;
      document.getElementById(`${key}-fill`).style.width  = pct + '%';

      const btnText = document.getElementById(`${key}-btn-text`);
      if (btnText) {
        btnText.textContent = done === 0 ? 'Start Learning'
          : done === all ? 'Review Track'
          : 'Continue';
      }
    });

    const overallPct = totalAll ? Math.round(doneAll / totalAll * 100) : 0;
    document.getElementById('overall-fill').style.width = overallPct + '%';
    document.getElementById('overall-text').textContent =
      doneAll === 0 ? "0% complete — let's get started!"
      : doneAll === totalAll ? '🎉 100% complete — you did it!'
      : `${overallPct}% complete — ${doneAll} of ${totalAll} lessons done`;
  }

  // ══════════════════════════════════════════════════════
  //  TRACK SCREEN
  // ══════════════════════════════════════════════════════
  function renderTrack(trackKey) {
    state.currentTrack = trackKey;
    const track = TRACKS[trackKey];
    showScreen('app-track');

    // Sidebar header
    document.getElementById('sidebar-track-icon').innerHTML = track.icon;
    document.getElementById('sidebar-track-icon').className = `sidebar-icon ${trackKey}-icon`;
    document.getElementById('sidebar-track-name').textContent = track.label;
    document.getElementById('sidebar-track-sub').textContent  = track.subtitle;

    // Sidebar progress
    const all  = getAllLessons(trackKey).length;
    const done = countDone(trackKey);
    const pct  = all ? Math.round(done / all * 100) : 0;
    document.getElementById('sidebar-prog-fill').style.width = pct + '%';
    document.getElementById('sidebar-prog-fill').className = `sidebar-prog-fill ${trackKey}-fill`;
    document.getElementById('sidebar-prog-text').textContent = `${done} / ${all} complete`;

    // Nav list
    renderLessonNav(trackKey, null);

    // Reset lesson panel
    const panel = document.getElementById('lesson-panel');
    panel.innerHTML = `
      <div class="lesson-welcome">
        <h2>Select a lesson to begin</h2>
        <p>Choose any lesson from the sidebar to start learning.</p>
      </div>`;
  }

  function renderLessonNav(trackKey, activeLessonId) {
    const track = TRACKS[trackKey];
    const nav   = document.getElementById('lesson-nav');
    let globalN = 0;
    nav.innerHTML = '';

    track.levels.forEach(level => {
      const section = document.createElement('div');
      section.className = 'level-section';

      const badgeClass = {
        beginner:     'badge-beginner',
        intermediate: 'badge-intermediate',
        advanced:     'badge-advanced',
      }[level.id] || 'badge-beginner';

      section.innerHTML = `
        <div class="level-header">
          <span class="level-badge ${badgeClass}">${level.label}</span>
        </div>`;

      level.lessons.forEach(lesson => {
        globalN++;
        const done   = isComplete(lesson.id);
        const active = lesson.id === activeLessonId;
        const item   = document.createElement('div');
        item.className = `lesson-nav-item${done ? ' done' : ''}${active ? ' active' : ''}`;
        item.dataset.lessonId = lesson.id;
        item.innerHTML = `
          <span class="nav-check">${done ? '✓' : ''}</span>
          <span class="nav-num">${globalN}</span>
          <span class="nav-name">${lesson.title}</span>`;
        item.addEventListener('click', () => openLesson(trackKey, lesson.id));
        section.appendChild(item);
      });

      nav.appendChild(section);
    });
  }

  // ══════════════════════════════════════════════════════
  //  LESSON SCREEN
  // ══════════════════════════════════════════════════════
  function openLesson(trackKey, lessonId) {
    state.currentTrack   = trackKey;
    state.currentLessonId = lessonId;
    state.quizAnswered   = false;
    state.quizCorrect    = false;

    const track   = TRACKS[trackKey];
    const lesson  = getLessonById(trackKey, lessonId);
    const level   = getLevelForLesson(trackKey, lessonId);
    const allLessons = getAllLessons(trackKey);
    const idx     = getLessonIndex(trackKey, lessonId);

    // Refresh sidebar nav highlight if on track screen
    const trackScreen = document.getElementById('app-track');
    if (trackScreen.classList.contains('active')) {
      renderLessonNav(trackKey, lessonId);
    }

    showScreen('app-lesson');

    // Breadcrumb
    document.getElementById('bc-track').textContent  = track.label;
    document.getElementById('bc-level').textContent  = level ? level.label : '';
    document.getElementById('bc-lesson').textContent = lesson.title;

    // Lesson counter
    document.getElementById('lesson-counter').textContent = `${idx + 1} / ${allLessons.length}`;

    // Nav arrows
    const prevBtn = document.getElementById('btn-prev-lesson');
    const nextBtn = document.getElementById('btn-next-lesson');
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === allLessons.length - 1;

    // Tag
    const tag     = document.getElementById('lesson-tag');
    const colors  = { html: '--html', css: '--css', js: '--js' };
    tag.textContent = track.label;
    tag.style.cssText = `
      background: var(${colors[trackKey]}-dim, rgba(100,100,100,0.15));
      color: var(${colors[trackKey]});
    `;

    // Title & content
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-content').innerHTML = lesson.content;

    // Quiz
    const quizArea = document.getElementById('quiz-area');
    if (lesson.quiz) {
      quizArea.classList.remove('hidden');
      document.getElementById('quiz-question').innerHTML = lesson.quiz.question;
      const optContainer = document.getElementById('quiz-options');
      optContainer.innerHTML = '';
      lesson.quiz.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className  = 'quiz-option';
        btn.innerHTML  = opt;
        btn.dataset.idx = i;
        btn.addEventListener('click', () => handleQuizAnswer(i));
        optContainer.appendChild(btn);
      });
      document.getElementById('quiz-feedback').className = 'quiz-feedback hidden';
      document.getElementById('quiz-feedback').textContent = '';
    } else {
      quizArea.classList.add('hidden');
    }

    // Complete button
    const completed = isComplete(lessonId);
    updateCompleteButton(completed);

    // Editor setup
    setupEditor(trackKey, lesson);
  }

  function updateCompleteButton(completed) {
    const btn  = document.getElementById('btn-complete');
    const text = document.getElementById('btn-complete-text');
    if (completed) {
      btn.classList.add('completed');
      text.textContent = '✓ Completed — Next Lesson?';
    } else {
      btn.classList.remove('completed');
      text.textContent = 'Mark Complete & Continue';
    }
  }

  // ── Quiz ─────────────────────────────────────────────
  function handleQuizAnswer(selectedIdx) {
    if (state.quizAnswered) return;
    state.quizAnswered = true;

    const lesson   = getLessonById(state.currentTrack, state.currentLessonId);
    const correct  = lesson.quiz.answer;
    const isRight  = selectedIdx === correct;
    state.quizCorrect = isRight;

    const options  = document.querySelectorAll('.quiz-option');
    options.forEach((btn, i) => {
      btn.disabled = true;
      if (i === correct)  btn.classList.add('correct');
      if (i === selectedIdx && !isRight) btn.classList.add('incorrect');
    });

    const fb = document.getElementById('quiz-feedback');
    fb.classList.remove('hidden', 'correct-fb', 'incorrect-fb');
    fb.classList.add(isRight ? 'correct-fb' : 'incorrect-fb');
    fb.textContent = isRight
      ? `✓ Correct! ${lesson.quiz.explanation}`
      : `✗ Not quite. ${lesson.quiz.explanation}`;
  }

  // ── Editor ───────────────────────────────────────────
  function setupEditor(trackKey, lesson) {
    const editorArea = document.getElementById('editor-area');
    const tabGroup   = document.getElementById('editor-tab-group');

    // Destroy old editors
    Object.values(state.editors).forEach(ed => {
      if (ed && ed.getWrapperElement) {
        ed.getWrapperElement().remove();
      }
    });
    state.editors    = {};
    state.editorCode = {};

    // Determine which tabs to show
    const starter = lesson.starterCode || {};
    const tabs = [];
    if (starter.html !== undefined) tabs.push({ key: 'html', label: 'index.html', mode: 'htmlmixed' });
    if (starter.css  !== undefined) tabs.push({ key: 'css',  label: 'style.css',  mode: 'css' });
    if (starter.js   !== undefined) tabs.push({ key: 'js',   label: 'script.js',  mode: 'javascript' });

    // If js track with only html, show js tab too
    if (tabs.length === 1 && tabs[0].key === 'html' && trackKey === 'js') {
      // JS lessons embed scripts in HTML — just show html tab
    }

    // Default to first tab
    state.editorTab = tabs.length > 0 ? tabs[0].key : 'html';

    // Render tabs
    tabGroup.innerHTML = '';
    tabs.forEach(tab => {
      const btn = document.createElement('div');
      btn.className = `editor-tab${tab.key === state.editorTab ? ' active' : ''}`;
      btn.textContent = tab.label;
      btn.dataset.tab = tab.key;
      btn.addEventListener('click', () => switchTab(tab.key));
      tabGroup.appendChild(btn);
    });

    // Create editors (only one visible at a time)
    editorArea.innerHTML = '';
    tabs.forEach(tab => {
      const wrap = document.createElement('div');
      wrap.className = 'cm-wrap';
      wrap.dataset.tab = tab.key;
      wrap.style.cssText = `height:100%;display:${tab.key === state.editorTab ? 'flex' : 'none'};flex-direction:column;`;
      editorArea.appendChild(wrap);

      const code = starter[tab.key] || '';
      state.editorCode[tab.key] = code;

      const cm = CodeMirror(wrap, {
        value:           code,
        mode:            tab.mode,
        theme:           'dracula',
        lineNumbers:     true,
        matchBrackets:   true,
        autoCloseBrackets: true,
        autoCloseTags:   true,
        tabSize:         2,
        indentWithTabs:  false,
        lineWrapping:    false,
        extraKeys: {
          'Ctrl-Enter': runCode,
          'Cmd-Enter':  runCode,
          'Ctrl-/':     (cm) => cm.execCommand('toggleComment'),
        },
      });

      cm.on('change', () => {
        state.editorCode[tab.key] = cm.getValue();
      });

      // Force refresh after layout
      setTimeout(() => cm.refresh(), 10);
      state.editors[tab.key] = cm;
    });

    // Auto-run on load
    setTimeout(runCode, 50);
  }

  function switchTab(tabKey) {
    state.editorTab = tabKey;

    // Update tab UI
    document.querySelectorAll('.editor-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tabKey);
    });

    // Show/hide editor wraps
    document.querySelectorAll('.cm-wrap').forEach(w => {
      const show = w.dataset.tab === tabKey;
      w.style.display = show ? 'flex' : 'none';
      if (show && state.editors[tabKey]) {
        setTimeout(() => state.editors[tabKey].refresh(), 10);
      }
    });
  }

  // ── Run code ─────────────────────────────────────────
  function runCode() {
    const frame = document.getElementById('output-frame');

    // Collect code from all editors
    const html = state.editorCode.html || '';
    const css  = state.editorCode.css  || '';
    const js   = state.editorCode.js   || '';

    let doc;

    // If html already contains a full document, inject css+js into it
    if (html.trim().toLowerCase().includes('<!doctype') ||
        html.trim().toLowerCase().startsWith('<html')) {
      // Full HTML document — inject any separate css/js
      let fullDoc = html;
      if (css) {
        fullDoc = fullDoc.replace('</head>', `<style>${css}</style></head>`);
      }
      if (js) {
        fullDoc = fullDoc.replace('</body>', `<script>${js}<\/script></body>`);
      }
      doc = fullDoc;
    } else {
      // Partial HTML — wrap it
      doc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  body { font-family: sans-serif; padding: 16px; }
  ${css}
</style>
</head>
<body>
${html}
${js ? `<script>${js}<\/script>` : ''}
</body>
</html>`;
    }

    frame.srcdoc = doc;
  }

  // ── Reset code ───────────────────────────────────────
  function resetCode() {
    const lesson = getLessonById(state.currentTrack, state.currentLessonId);
    if (!lesson) return;
    const starter = lesson.starterCode || {};
    Object.entries(starter).forEach(([key, code]) => {
      if (state.editors[key]) {
        state.editors[key].setValue(code);
        state.editorCode[key] = code;
      }
    });
    setTimeout(runCode, 50);
    showToast('Code reset to starter', 'info');
  }

  // ── Mark complete ─────────────────────────────────────
  function handleComplete() {
    const lessonId  = state.currentLessonId;
    const trackKey  = state.currentTrack;
    const allLessons = getAllLessons(trackKey);
    const idx       = getLessonIndex(trackKey, lessonId);
    const isLast    = idx === allLessons.length - 1;

    if (!isComplete(lessonId)) {
      markLessonComplete(lessonId);
      updateCompleteButton(true);
      // Update sidebar nav checkmark
      renderLessonNav(trackKey, lessonId);
      updateSidebarProgress(trackKey);
    }

    // Show modal
    const nextLesson = !isLast ? allLessons[idx + 1] : null;
    showCompletionModal(isLast, nextLesson);
  }

  function updateSidebarProgress(trackKey) {
    const all  = getAllLessons(trackKey).length;
    const done = countDone(trackKey);
    const pct  = all ? Math.round(done / all * 100) : 0;
    const fill = document.getElementById('sidebar-prog-fill');
    const text = document.getElementById('sidebar-prog-text');
    if (fill) { fill.style.width = pct + '%'; }
    if (text) { text.textContent = `${done} / ${all} complete`; }
  }

  // ── Completion modal ──────────────────────────────────
  function showCompletionModal(isLast, nextLesson) {
    const modal  = document.getElementById('completion-modal');
    const title  = document.getElementById('modal-title');
    const body   = document.getElementById('modal-body');
    const nextBtn = document.getElementById('modal-next');

    if (isLast) {
      title.textContent = '🏆 Track Complete!';
      body.textContent  = `You've finished the entire ${TRACKS[state.currentTrack].label} track! Amazing work.`;
      nextBtn.textContent = 'Back to Home';
    } else {
      title.textContent = '🎉 Lesson Complete!';
      body.textContent  = nextLesson
        ? `Up next: "${nextLesson.title}"`
        : 'Great job! Keep going.';
      nextBtn.textContent = 'Next Lesson →';
    }

    modal.classList.remove('hidden');
    spawnConfetti();

    // Wire next button
    nextBtn.onclick = () => {
      modal.classList.add('hidden');
      if (isLast) {
        renderLanding();
      } else if (nextLesson) {
        openLesson(state.currentTrack, nextLesson.id);
      }
    };

    document.getElementById('modal-stay').onclick = () => {
      modal.classList.add('hidden');
    };
  }

  function spawnConfetti() {
    const container = document.getElementById('modal-confetti');
    container.innerHTML = '';
    const colors = ['#f97316','#38bdf8','#fbbf24','#34d399','#a78bfa','#f472b6'];
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-particle';
      p.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 40}%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        --tx: ${(Math.random() - 0.5) * 120}px;
        --rot: ${Math.random() * 720}deg;
        animation-delay: ${Math.random() * 0.4}s;
        animation-duration: ${0.9 + Math.random() * 0.6}s;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      `;
      container.appendChild(p);
    }
  }

  // ── Toast ─────────────────────────────────────────────
  let toastTimer;
  function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.className   = `toast ${type} show`;
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // ── Prev / Next lesson navigation ─────────────────────
  function goToPrevLesson() {
    const all = getAllLessons(state.currentTrack);
    const idx = getLessonIndex(state.currentTrack, state.currentLessonId);
    if (idx > 0) openLesson(state.currentTrack, all[idx - 1].id);
  }

  function goToNextLesson() {
    const all = getAllLessons(state.currentTrack);
    const idx = getLessonIndex(state.currentTrack, state.currentLessonId);
    if (idx < all.length - 1) openLesson(state.currentTrack, all[idx + 1].id);
  }

  // ── Resize handle ─────────────────────────────────────
  function initResizeHandle() {
    const handle = document.getElementById('resize-handle');
    const pane   = document.getElementById('instruction-pane');

    handle.addEventListener('mousedown', e => {
      state.resizing    = true;
      state.resizeStartX = e.clientX;
      state.resizeStartW = pane.getBoundingClientRect().width;
      handle.classList.add('dragging');
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'col-resize';
    });

    document.addEventListener('mousemove', e => {
      if (!state.resizing) return;
      const delta = e.clientX - state.resizeStartX;
      const newW  = Math.max(280, Math.min(700, state.resizeStartW + delta));
      pane.style.width    = newW + 'px';
      pane.style.minWidth = newW + 'px';
      pane.style.maxWidth = newW + 'px';
      // Refresh editors
      Object.values(state.editors).forEach(ed => ed && ed.refresh());
    });

    document.addEventListener('mouseup', () => {
      if (!state.resizing) return;
      state.resizing = false;
      handle.classList.remove('dragging');
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    });
  }

  // ── Reset all progress ────────────────────────────────
  function resetAllProgress() {
    if (!confirm('Reset ALL progress? This cannot be undone.')) return;
    localStorage.removeItem(STORAGE_KEY);
    renderLanding();
    showToast('Progress reset', 'info');
  }

  // ══════════════════════════════════════════════════════
  //  EVENT BINDING
  // ══════════════════════════════════════════════════════
  function bindEvents() {
    // Landing — track start buttons
    document.querySelectorAll('.btn-start').forEach(btn => {
      btn.addEventListener('click', () => {
        const track = btn.dataset.track;
        if (track) renderTrack(track);
      });
    });

    // Landing — track cards (whole card click)
    document.querySelectorAll('.track-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.btn-start')) return; // handled above
        const track = card.dataset.track;
        if (track) renderTrack(track);
      });
    });

    // Landing — reset progress
    document.getElementById('btn-reset-progress').addEventListener('click', resetAllProgress);

    // Track screen — back to home
    document.getElementById('btn-back-home').addEventListener('click', renderLanding);

    // Lesson screen — back to track
    document.getElementById('btn-back-track').addEventListener('click', () => {
      if (state.currentTrack) renderTrack(state.currentTrack);
      else renderLanding();
    });

    // Lesson nav arrows
    document.getElementById('btn-prev-lesson').addEventListener('click', goToPrevLesson);
    document.getElementById('btn-next-lesson').addEventListener('click', goToNextLesson);

    // Run & reset code
    document.getElementById('btn-run').addEventListener('click', runCode);
    document.getElementById('btn-reset-code').addEventListener('click', resetCode);

    // Mark complete
    document.getElementById('btn-complete').addEventListener('click', handleComplete);

    // Modal close on overlay click
    document.getElementById('completion-modal').addEventListener('click', e => {
      if (e.target === e.currentTarget) {
        e.currentTarget.classList.add('hidden');
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
      // Esc closes modal
      if (e.key === 'Escape') {
        document.getElementById('completion-modal').classList.add('hidden');
      }
    });
  }

  // ══════════════════════════════════════════════════════
  //  INIT
  // ══════════════════════════════════════════════════════
  function init() {
    initResizeHandle();
    bindEvents();
    renderLanding();

    // Deep link: if URL has ?track=html&lesson=html-b-1
    const params = new URLSearchParams(window.location.search);
    const track  = params.get('track');
    const lesson = params.get('lesson');
    if (track && TRACKS[track]) {
      if (lesson && getLessonById(track, lesson)) {
        openLesson(track, lesson);
      } else {
        renderTrack(track);
      }
    }
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
