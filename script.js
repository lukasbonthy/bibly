// Theme toggler script
const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load stored preference
(function() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') html.classList.add('dark');
})();

toggleBtn.addEventListener('click', () => {
  html.classList.toggle('dark');
  const mode = html.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
});
