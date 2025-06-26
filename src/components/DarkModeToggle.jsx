import { useRef, useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  
  const themeRef = useRef(document.documentElement);

  useEffect(() => {
    // Applica il tema al mount
    applyTheme(darkMode);
    
    // Salva la preferenza
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const applyTheme = (isDark) => {
    if (themeRef.current) {
      if (isDark) {
        themeRef.current.setAttribute('data-bs-theme', 'dark');
      } else {
        themeRef.current.removeAttribute('data-bs-theme');
      }
    }
  };

  return (
    <button 
      className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} p-2`}
      onClick={() => setDarkMode(!darkMode)}
      aria-pressed={darkMode}
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};
export default DarkModeToggle