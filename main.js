document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. Navigation Logic --- */
    const hamburger = document.getElementById('hamburger');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('main-header');

    // Toggle Menu
    hamburger.addEventListener('click', () => {
        body.classList.toggle('menu-open');
    });

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('menu-open');
        });
    });

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- 2. Scroll Reveal Animation --- */
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    /* --- 3. Before/After Slider Logic --- */
    const slider = document.querySelector('.comparison-slider');
    const beforeImage = document.querySelector('.img-wrapper.before');
    const handle = document.querySelector('.handle');
    const containerWidth = slider.offsetWidth;
    // Fix width of image inside 'before' wrapper so it doesn't squash
    const beforeImgEl = beforeImage.querySelector('img');

    // Sync image width with container
    const syncImageWidth = () => {
        const w = slider.offsetWidth;
        beforeImgEl.style.width = `${w}px`;
    };
    
    window.addEventListener('resize', syncImageWidth);
    syncImageWidth();

    // Mouse Move / Touch Move
    const moveSlider = (e) => {
        let xPos = 0;
        const rect = slider.getBoundingClientRect();

        if (e.type === 'touchmove') {
            xPos = e.touches[0].clientX - rect.left;
        } else {
            xPos = e.clientX - rect.left;
        }

        // Boundaries
        if (xPos < 0) xPos = 0;
        if (xPos > rect.width) xPos = rect.width;

        const percentage = (xPos / rect.width) * 100;

        beforeImage.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
    };

    slider.addEventListener('mousemove', moveSlider);
    slider.addEventListener('touchmove', moveSlider);
});