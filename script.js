// Intersection Observer for Smooth Scroll Reveals
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll('.reveal');

    // Setup the observer options
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    // Callback function when intersection occurs
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'active' class to trigger the CSS transition
                entry.target.classList.add('active');
                // Unobserve once revealed so it doesn't animate again if they scroll up
                observer.unobserve(entry.target);
            }
        });
    };

    // Initialize the Observer
    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Observe each element
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});
