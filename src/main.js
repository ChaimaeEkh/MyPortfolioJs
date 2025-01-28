AOS.init({
    duration: 1000,
    once: true,
    });
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li');
    const customCursor = document.querySelector('.custom-cursor');
    
    burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    burger.classList.toggle('toggle');
    });
    
    navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
        burger.classList.remove('toggle');
    });
    });
    
    document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => {
    customCursor.classList.add('grow');
    });
    
    document.addEventListener('mouseup', () => {
    customCursor.classList.remove('grow');
    });
    
    const glitchText = document.querySelector('.glitch');
    setInterval(() => {
    glitchText.style.animation = 'none';
    void glitchText.offsetWidth;
    glitchText.style.animation = null;
    }, 5000);
    
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent!');
    contactForm.reset();
    });
    
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1) rotate(5deg)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1) rotate(0deg)';
    });
    });
    
    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerText = '🌙';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.top = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.zIndex = '1001';
    darkModeToggle.style.background = 'none';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.fontSize = '24px';
    darkModeToggle.style.cursor = 'pointer';
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        
        // Sélectionner toutes les icônes
        const fabIcons = document.querySelectorAll('.fab');
        const fasIcons = document.querySelectorAll('.fas');
        
        // Changer la couleur des icônes
        if (document.body.classList.contains('dark-mode')) {
            fabIcons.forEach(icon => icon.style.color = '#fff');
            fasIcons.forEach(icon => icon.style.color = '#fff');
        } else {
            fabIcons.forEach(icon => icon.style.color = ''); // Réinitialiser à la couleur par défaut
            fasIcons.forEach(icon => icon.style.color = ''); // Réinitialiser à la couleur par défaut
        }
    });
    
    // Smooth scrolling 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
    });
    
    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('.skill-item', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top center',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
    });
    
    //emailJs
        function SendMail(){
            var params = {
                name : document.getElementById('name').value,
                email : document.getElementById('email').value,
                phone : document.getElementById('phone').value,
                service : document.getElementById('service'),
                message : document.getElementById('message').value
            }
            emailjs.send("service_sdkplyl", "template_esv0k5j", params).then(function (res){
                alert("Success!" + res.status);
            })
        }
    
    //bottom to-top
    function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
    
            // Optionnel : Afficher le bouton "to-top" lorsque l'utilisateur fait défiler vers le bas
            window.addEventListener('scroll', function() {
                const toTopButton = document.querySelector('.to-top');
                if (window.scrollY > 300) {
                    toTopButton.classList.remove('hidden');
                } else {
                    toTopButton.classList.add('hidden');
                }
            });
    
    
            //girl illustration :
            const girl = document.querySelector('.girl');
            const maxRotation = 20;
            const maxTranslate = 15;
    
            girl.addEventListener('mousemove', (e) => {
                const rect = girl.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const rotateY = ((x / rect.width) - 0.5) * maxRotation;
                const rotateX = ((y / rect.height) - 0.5) * -maxRotation;
                const translateZ = Math.min(maxTranslate, Math.max(Math.abs(rotateX), Math.abs(rotateY)));
    
                girl.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateZ(${translateZ}px)
                `;
            });
    
            girl.addEventListener('mouseleave', () => {
                girl.style.transform = 'none';
            });
    
            //numbers experiance :
            document.addEventListener('DOMContentLoaded', () => {
            const counters = document.querySelectorAll('.counter h3');
            let counted = false;
    
            function startCounting() {
                if (counted) return;
    
                counters.forEach(counter => {
                    const targetText = counter.textContent;
                    const target = parseInt(targetText.match(/\d+/)[0]);
                    let current = 0;
                    const duration = 2000; // Durée de l'animation en millisecondes
                    const steps = 100;
                    const increment = target / steps;
    
                    const updateCounter = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(updateCounter);
                        }
                        counter.textContent = targetText.replace(/\d+/, Math.round(current));
                    }, duration / steps);
                });
    
                counted = true;
            }
    
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
    
            function checkScroll() {
                const experienceSection = document.querySelector('.experience.numbers');
                if (isElementInViewport(experienceSection)) {
                    startCounting();
                    window.removeEventListener('scroll', checkScroll);
                }
            }
    
            window.addEventListener('scroll', checkScroll);
            checkScroll(); // Vérifier au chargement initial de la page
        });