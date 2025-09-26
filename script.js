document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle (Burger Menu)
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change icon based on state
        if (navLinks.classList.contains('active')) {
            burger.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // 'X' icon
        } else {
            burger.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Burger icon
        }
    });

    // Smooth scrolling for all internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
             e.preventDefault();
             document.querySelector(this.getAttribute('href')).scrollIntoView({
                 behavior: 'smooth'
             });

            // Close the mobile menu after clicking a link
            if (window.innerWidth <= 900) {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
                }
            }
        });
    });
});