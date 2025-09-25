window.addEventListener('scroll', function() {
    const layer0 = document.querySelector('.layer-0');
    const layer1 = document.querySelector('.layer-1');
    const layer2 = document.querySelector('.layer-2');
    const video = document.querySelector('.video_background');

    if (layer0 && layer1 && layer2) {
        const scrolled = window.scrollY;
    
        // Layer 1 move mais rápido e escala menos
        layer1.style.transform = `translateY(${scrolled * 0.9}px)`;

    }

    if (video) {
        const scrolled = window.scrollY;  
        
        // Layer 1 move mais rápido e escala menos
        video.style.transform = `translateY(${scrolled * 0.9}px)`;

    }
});


function updateCountdown() {
    const weddingDate = new Date('2026-01-25T10:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelectorAll('._timeUnit_1akl3_39').forEach((unit, index) => {
        const value = [months, days, hours, minutes, seconds][index];
        unit.querySelector('h1').textContent = value.toString().padStart(2, '0');
    });

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelectorAll('._timeUnit_1akl3_39 h1').forEach(el => {
            el.textContent = '00';
        });
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


// Adiciona rolagem suave para os links do menu
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        let targetElement;
        
        if (targetId.startsWith('#')) {
            targetElement = document.querySelector(targetId);
        } else if (targetId.startsWith('.')) {
            targetElement = document.querySelector(targetId);
        }

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


