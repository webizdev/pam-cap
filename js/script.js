/**
 * js/script.js - Interactive Scripts for PAM Capital
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Toggle icon between bars and times
        if (mobileMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });

    // 2. Sticky Navbar on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    // Trigger once on load in case page is already scrolled
    if (window.scrollY > 50) navbar.classList.add('scrolled');

    // 3. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    // Set up default observer options
    const revealOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 4. WhatsApp Static Form Logic
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload

            // Get form values
            const name = document.getElementById('name').value.trim();
            const company = document.getElementById('company').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Destination WhatsApp Number (example number from PRD)
            const waNumber = "6281511555562";

            // Format the WhatsApp message
            const waMessage = `Hello PAM Capital Team,%0A%0A` + 
                              `I would like to make an enquiry.%0A%0A` + 
                              `*Name:* ${name}%0A` + 
                              `*Company:* ${company}%0A` + 
                              `*Email:* ${email}%0A%0A` + 
                              `*Message:*%0A${message}%0A%0A` + 
                              `Thank you.`;

            // redirect to WhatsApp
            const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;
            window.open(waUrl, '_blank'); // Open in new tab
        });
    }
});
