// Header Scroll Effect
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    this.classList.toggle('fa-times');
    this.classList.toggle('fa-bars');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function () {
        navMenu.classList.remove('active');
        navToggle.classList.remove('fa-times');
        navToggle.classList.add('fa-bars');
    });
});

// Testimonial Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dot');

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Animate skills when about section comes into view
const aboutSection = document.querySelector('.about');
const aboutContainer = document.querySelector('.about-container');

function checkScroll() {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
        aboutContainer.classList.add('active');
        window.removeEventListener('scroll', checkScroll);
    }
}

window.addEventListener('scroll', checkScroll);
// Check on page load in case section is already visible
checkScroll();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});