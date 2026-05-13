document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.libre-header');

    // Efecto de Header Compacto al hacer Scroll
    const scrollThreshold = 80;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-compact');
        } else {
            header.classList.remove('header-compact');
        }
    });

    // Smooth scrolling para los enlaces de navegación (si existen)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animación de aparición al hacer scroll (Reveal effect)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.libre-link-card, .user-profile');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
