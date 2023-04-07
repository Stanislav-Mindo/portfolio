const btnDarkMode = document.querySelector('.dark-mode-btn');

btnDarkMode.onclick = function () {    
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');


    if (isDark) {
        localStorage.setItem('darkMode', 'dark')        
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}