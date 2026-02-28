document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
    // Counter Animation
    const counter = document.getElementById('counter');
    if (counter) {
        const target = 10000;
        let count = 0;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (easeOutExpo)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            count = easeProgress * target;
            counter.innerText = '+' + Math.floor(count).toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = '+' + target.toLocaleString();
            }
        };
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                requestAnimationFrame(updateCount);
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.5 });
        observer.observe(counter);
    }
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('section, .value-card, .product-feature');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';
        revealObserver.observe(el);
    });
    // Add CSS for revealed state
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
