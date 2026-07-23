const toggleBtn = document.getElementById('theme-toggle');

// 1. Check if the user previously picked dark mode on another page
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  if (toggleBtn) toggleBtn.textContent = 'Light Mode';
}

// 2. Listen for button clicks to toggle theme & save preference
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');

    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      toggleBtn.textContent = 'Dark Mode';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = 'Light Mode';
    }
  });
}
