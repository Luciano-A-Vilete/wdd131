document.addEventListener("DOMContentLoaded", function() {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Set last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").querySelector("span").textContent = lastModified;

    // Responsive navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    const navToggleIcon = document.querySelector('.nav-toggle');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        if (navMenu.classList.contains('show')) {
            navToggleIcon.innerHTML = '&times;'; // Change to 'X' symbol
        } else {
            navToggleIcon.innerHTML = '&#9776;'; // Change back to hamburger menu
        }
    });
});
