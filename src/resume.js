const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    observer.observe(item);
});

document.querySelectorAll('.skills-list li').forEach(skill => {
    skill.addEventListener('mouseover', (e) => {
        e.target.style.transform = 'translateY(-5px) scale(1.1)';
    });

    skill.addEventListener('mouseout', (e) => {
        e.target.style.transform = 'translateY(0) scale(1)';
    });
});

document.querySelectorAll('.timeline-content').forEach(content => {
    content.addEventListener('mouseover', (e) => {
        const timelineItem = e.currentTarget.closest('.timeline-item');
        const dot = timelineItem.querySelector('.timeline-item::after');
        if (dot) {
            dot.style.transform = 'scale(1.3)';
        }
    });

    content.addEventListener('mouseout', (e) => {
        const timelineItem = e.currentTarget.closest('.timeline-item');
        const dot = timelineItem.querySelector('.timeline-item::after');
        if (dot) {
            dot.style.transform = 'scale(1)';
        }
    });
});

document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        item.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center'
        });
    });
});

class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
    }

    draw(ctx) {
        ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.opacity = '0.5';
document.body.prepend(canvas);

// Initialize canvas and particles
const ctx = canvas.getContext('2d');
let particles = [];
const numberOfParticles = 50;

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(canvas));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
    });
    requestAnimationFrame(animate);
}
window.addEventListener('resize', initCanvas);
initCanvas();
animate();