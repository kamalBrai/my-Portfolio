const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

// ⭐️ UPDATED: Select both Desktop and Mobile elements ⭐️
const themeToggleDesktop = document.querySelector('#themeToggleDesktop');
const themeIconDesktop = document.querySelector('#themeIconDesktop');
const themeToggleMobile = document.querySelector('#themeToggleMobile');
const themeIconMobile = document.querySelector('#themeIconMobile');

// --- Mobile Menu Functions ---

function openMenu(){
    sideMenu.classList.remove('-right-64');
    sideMenu.classList.add('right-0');
}
function closeMenu(){
    sideMenu.classList.remove('right-0');
    sideMenu.classList.add('-right-64');
}

// --- Navigation Bar Scroll Effect ---
window.addEventListener('scroll', ()=> {
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50','backdrop-blur-lg','shadow-sm', 'dark:bg-darkTheme', 'dark:bg-opacity-80');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:bg-darkTheme');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50','backdrop-blur-lg','shadow-sm', 'dark:bg-darkTheme', 'dark:bg-opacity-80');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:bg-darkTheme');
    }
})

// --- Dark/Light Mode Theme Toggle ---

// ⭐️ NEW FUNCTION: Sets the icon source for BOTH desktop and mobile buttons ⭐️
function setIcons(isDark) {
    // If the theme is dark, use the WHITE sun icon. Otherwise, use the BLACK moon icon.
    const iconSrc = isDark ? './images/sun_icon.png' : './images/moon_icon.png';
    
    // Update Desktop Icon
    if (themeIconDesktop) {
        themeIconDesktop.src = iconSrc;
    }
    // Update Mobile Icon
    if (themeIconMobile) {
        themeIconMobile.src = iconSrc;
    }
}

// Function to check initial state and apply theme
function checkTheme() {
    let isDark = false;
    
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        isDark = true;
    } else {
        document.documentElement.classList.remove('dark');
        isDark = false;
    }
    
    setIcons(isDark);
}

// Function to toggle theme
function toggleTheme() {
    let isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        isDark = false;
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        isDark = true;
    }
    
    setIcons(isDark);
}

// Initialize theme on load
window.onload = checkTheme;

// ⭐️ UPDATED: Add event listeners to BOTH buttons ⭐️
if (themeToggleDesktop) {
    themeToggleDesktop.addEventListener('click', toggleTheme);
}
if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
}