const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load user preference
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    html.classList.add('dark');
    toggleBtn.textContent = '☀️';
  }
})();

toggleBtn.addEventListener('click', () => {
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
});
