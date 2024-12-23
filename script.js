let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto-change slides every 5 seconds
setInterval(() => changeSlide(1), 5000);
  // New script for scrolling services
  const servicesContainer = document.querySelector('.services-container');
const serviceCards = document.querySelectorAll('.service-card');
let currentIndex = 0;

function scrollServices() {
    currentIndex = (currentIndex + 1) % (serviceCards.length - 3);
    servicesContainer.scrollTo({
        left: serviceCards[currentIndex].offsetLeft - servicesContainer.offsetLeft,
        behavior: 'smooth'
    });
}

// Scroll services every 5 seconds
setInterval(scrollServices, 5000);
         // Enhanced script for testimonial slider
         let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial');

        function changeTestimonial(direction) {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + direction + testimonials.length) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
            updateSliderPosition();
        }

        function updateSliderPosition() {
            const slider = document.querySelector('.testimonial-slider');
            slider.style.transform = `translateX(-${currentTestimonial * 100}%)`;
        }

        // Auto-change testimonials every 7 seconds
        setInterval(() => changeTestimonial(1), 7000);
        
    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in, .scale-in').forEach(el => {
        observer.observe(el);
    });

    // Services carousel for mobile
    if (window.innerWidth <= 576) {
        const servicesGrid = document.querySelector('.index-services-grid');
        const cards = document.querySelectorAll('.index-service-card');
        let currentIndex = 0;

        function showCard(index) {
            cards.forEach(card => card.classList.remove('active'));
            cards[index].classList.add('active');
            servicesGrid.style.transform = `translateX(-${index * 100}%)`;
        }

        document.querySelector('.nav-button.prev').addEventListener('click', () => {
            currentIndex = Math.max(0, currentIndex - 1);
            showCard(currentIndex);
        });

        document.querySelector('.nav-button.next').addEventListener('click', () => {
            currentIndex = Math.min(cards.length - 1, currentIndex + 1);
            showCard(currentIndex);
        });

        // Initialize first card
        showCard(0);
    }
});
 