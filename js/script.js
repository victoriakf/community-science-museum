const mainNav = document.querySelector(".main-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const showMenu = mainNav.getAttribute('data-showing')
    
    if (showMenu === "false") {
        mainNav.setAttribute("data-showing", true);
    } else if (showMenu === "true") {
        mainNav.setAttribute("data-showing", false);
    }
})