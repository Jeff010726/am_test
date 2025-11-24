document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const menuTrigger = document.getElementById('menuTrigger');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('section');

    function toggleMenu() {
        menuTrigger.classList.toggle('active');
        sidebar.classList.toggle('open');
        sidebarOverlay.classList.toggle('active');
    }

    menuTrigger.addEventListener('click', toggleMenu);
    sidebarOverlay.addEventListener('click', toggleMenu);

    // Smooth Scroll for Dots
    navDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const pageId = dot.getAttribute('data-page');
            const target = document.getElementById(`page-${pageId}`);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer for Animations & Dots
    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Update Dots
                const id = entry.target.getAttribute('id');
                if (id) {
                    const pageNum = id.split('-')[1];
                    navDots.forEach(dot => {
                        dot.classList.remove('active');
                        if (dot.getAttribute('data-page') === pageNum) {
                            dot.classList.add('active');
                        }
                    });
                }

                // Trigger Animations
                const animatables = entry.target.querySelectorAll('.fade-in');
                animatables.forEach(el => el.classList.add('visible'));
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Parallax Effect for Hero Product
    const productVisual = document.querySelector('.product-visual');
    if (productVisual) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            productVisual.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});
