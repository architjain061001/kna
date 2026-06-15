document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navCloseBtn = document.querySelector('.nav-close-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else if (!navMenu.classList.contains("active")) {
            navbar.classList.remove("scrolled");
        }
    });

    hamburger?.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        if (navMenu.classList.contains("active")) navbar.classList.add("scrolled");
        else if (window.scrollY < 60) navbar.classList.remove("scrolled");
    });

    navCloseBtn?.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        if (window.scrollY < 60) navbar.classList.remove("scrolled");
    });

    navLinks.forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        if (window.scrollY < 60) navbar.classList.remove("scrolled");
    }));

    // Scroll reveal
    const revealEls = document.querySelectorAll('.section, .gold-line, .letter-card, .intro, .memory-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));
});
