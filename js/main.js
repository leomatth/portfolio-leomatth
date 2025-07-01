// main.js
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const langSelect = document.getElementById('lang-select');

// 🌗 Tema claro/escuro
themeToggle.addEventListener('click', () => {
  const atual = html.getAttribute('data-theme');
  const novo = atual === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', novo);
  localStorage.setItem('theme', novo);
});

// 🌍 Idioma (placeholder)
langSelect.addEventListener('change', (e) => {
  const idioma = e.target.value;
  document.documentElement.lang = idioma;
  // Aqui você pode integrar com i18next ou json de tradução no futuro
});

// 👀 Aplicar preferências salvas
const savedTheme = localStorage.getItem('theme');
if (savedTheme) html.setAttribute('data-theme', savedTheme);
