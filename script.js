document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navegación Móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Efecto de Scroll en Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Animación de Aparición (Fade In)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// 4. NUEVA Función Toggle Universal (Funciona para ambos botones)
function toggleService(detailsId, btnId) {
    const details = document.getElementById(detailsId);
    const btn = document.getElementById(btnId);
    
    // Si no existen, salimos para evitar errores
    if (!details || !btn) return;

    if (details.classList.contains('open')) {
        details.classList.remove('open');
        btn.textContent = "Ver Detalles";
    } else {
        details.classList.add('open');
        btn.textContent = "Cerrar Detalles";
    }
}