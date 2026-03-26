/* =============================================
   MAIN JS
   Theme, news scroll, pub tabs, scroll spy
   ============================================= */

// ---- Theme toggle ----
function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Init theme from saved preference or system
(function () {
  const saved = localStorage.getItem('theme');
  const prefer = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', saved || prefer);
})();


// ---- News: show exactly 5 rows, scroll the rest ----
(function () {
  const ticker = document.getElementById('newsTicker');
  if (!ticker) return;
  const rows = ticker.querySelectorAll('.news-row');
  const VISIBLE_ROWS = 5;
  if (rows.length > VISIBLE_ROWS) {
    let h = 0;
    for (let i = 0; i < VISIBLE_ROWS; i++) h += rows[i].offsetHeight;
    ticker.style.maxHeight = h + 'px';
  }
})();


// ---- Publication tab switching ----
function switchPubTab(tab) {
  document.querySelectorAll('.pub-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pub-group').forEach(g => g.classList.remove('active'));
  const idx = tab === 'selected' ? 0 : 1;
  document.querySelectorAll('.pub-tab')[idx].classList.add('active');
  document.getElementById(tab === 'selected' ? 'pub-selected' : 'pub-all').classList.add('active');
}


// ---- Nav scroll spy ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.1, rootMargin: '-72px 0px -40% 0px' });

sections.forEach(s => navObserver.observe(s));


// ---- Scroll reveal ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


// ---- Smooth scroll nav links ----
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});
