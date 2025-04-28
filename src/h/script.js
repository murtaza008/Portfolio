// Select all skill bars and h3 elements inside the About section
const skillBars = document.querySelectorAll('.skill-bar');
const headings = document.querySelectorAll('.about h3');

// Select all the cards in the service section
const serviceCards = document.querySelectorAll('.service-container .card');

// Options for Intersection Observer (same as before)
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5 // Trigger the animation when 50% of the element is visible
};

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add class to start animation
        } else {
            entry.target.classList.remove('visible'); // Remove class when out of view
        }
    });
}, options);

// Observe each skill bar and heading (h3) in About section
skillBars.forEach(bar => {
    observer.observe(bar);
});

headings.forEach(heading => {
    observer.observe(heading);
});

// Observe each card in the service section
serviceCards.forEach((card, index) => {
    // Apply "left" animation class to the first two cards
    if (index < 2) {
        card.classList.add('left');
    }
    // Apply "right" animation class to the last two cards
    else {
        card.classList.add('right');
    }

    observer.observe(card);
});
// Select all project elements (project1, project2, and project3)
const projects = document.querySelectorAll('.project1, .project2, .project3');

// Create an intersection observer to trigger the animations
const projectObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add class to trigger animation
        } else {
            entry.target.classList.remove('visible'); // Remove class when out of view
        }
    });
}, {
    root: null, // Viewport as root
    rootMargin: '0px',
    threshold: 0.5 // Trigger animation when 50% is visible
});

// Observe each project element
projects.forEach(project => {
    projectObserver.observe(project);
});

let typed = new Typed(".name-span", {
    strings: ["Murtaza Mazhar"],
    typeSpeed: 12,
    backSpeed: 14,
    loop: true,
    startDelay: 500,
    backDelay: 500
})
let typed1 = new Typed(".contact-span", {
    strings: ["Lets Design Together"],
    typeSpeed: 10,
    backSpeed: 12,
    loop: true,
    startDelay: 500,
    backDelay: 500
})
// Select the .aboutimg div
const aboutimg = document.querySelector('.aboutimg');

// Observe the .aboutimg element
const aboutimgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Trigger the animation
        } else {
            entry.target.classList.remove('visible'); // Remove the class when out of view
        }
    });
}, {
    root: null, // Viewport as root
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
});

// Observe .aboutimg div
aboutimgObserver.observe(aboutimg);