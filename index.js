//JS Script for smooth scroll /

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

//JS for home page fade-in effect/

    document.addEventListener("DOMContentLoaded", function () {
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, {
    threshold: 0.1
});

const homeContainer = document.querySelector('.home-container1');
if (homeContainer) observer.observe(homeContainer);
});



//JS for nav hover freeze/

    document.addEventListener("DOMContentLoaded", function () {
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove("active"));

            // Add active to the one that matches current section
            const id = entry.target.getAttribute("id");
            const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
}, {
    threshold: 0.6 // trigger when 60% of section is visible
});

sections.forEach(section => observer.observe(section));
});

