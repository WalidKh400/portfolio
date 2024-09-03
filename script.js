document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Change header style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing effect text change
    const typingText = document.querySelector('.typing-text span');
    const texts = ["Web Designer", "Web Developer", "Graphic Designer", "UI/UX Designer", "Freelancer", "Creative Thinker"];
    let index = 0;

    function changeText() {
        typingText.textContent = texts[index];
        typingText.style.opacity = 0;
        setTimeout(() => {
            typingText.style.opacity = 1;
        }, 200); // Fade effect duration
        index = (index + 1) % texts.length;
    }

    setInterval(changeText, 3000); // Change text every 3 seconds
});
