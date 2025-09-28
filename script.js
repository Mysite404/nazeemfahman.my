document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle (Burger Menu)
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Ensure elements exist before adding listeners
    if (burger && navLinks) {
        
        // Listener for opening and closing the mobile menu
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Change icon based on state (Hamburger <-> X)
            if (navLinks.classList.contains('active')) {
                burger.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // 'X' icon for close
            } else {
                burger.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Burger icon for open
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
        
    } else {
        // Optional: Helpful console message if elements are missing from HTML
        console.error("Critical elements (.burger-menu or .nav-links) not found in the DOM.");
    }
});

.burger-menu {
    /* ... existing styles ... */
    z-index: 9999; /* Use a very high number to guarantee visibility/clickability */
    position: relative;
}
header {
    /* ... existing styles ... */
    z-index: 1000; 
}