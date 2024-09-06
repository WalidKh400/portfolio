document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('fa-times');
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });

    // Typing effect for home section
    const typingText = document.querySelector('.typing-text span');
    const textArray = ['Developer', 'Designer', 'Hacker', 'Musician'];
    let textIndex = 0;
    let letterIndex = 0;

    function type() {
        if (letterIndex < textArray[textIndex].length) {
            typingText.textContent += textArray[textIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            typingText.textContent = textArray[textIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(erase, 100);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    type();
});
