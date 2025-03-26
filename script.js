// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    
    // Add cursor animation
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';
    document.body.appendChild(cursorOutline);
    
    // Add cursor styles
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .cursor-dot {
            width: 5px;
            height: 5px;
            background-color: var(--primary-color);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            transform: translate(-50%, -50%);
        }
        
        .cursor-outline {
            width: 30px;
            height: 30px;
            border: 2px solid var(--primary-color);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            opacity: 0;
            transition: transform 0.1s, opacity 0.3s ease-in-out;
            transform: translate(-50%, -50%);
        }
        
        .dark-theme .cursor-dot {
            background-color: var(--primary-color);
        }
        
        .dark-theme .cursor-outline {
            border-color: var(--primary-color);
        }
        
        a:hover ~ .cursor-outline, 
        button:hover ~ .cursor-outline,
        .btn:hover ~ .cursor-outline,
        .theme-toggle:hover ~ .cursor-outline {
            transform: translate(-50%, -50%) scale(1.5);
            background-color: rgba(74, 108, 247, 0.1);
        }
    `;
    document.head.appendChild(cursorStyle);
    
    // Cursor movement
    document.addEventListener('mousemove', function(e) {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        cursorDot.style.opacity = 1;
        
        cursorOutline.style.left = e.clientX + 'px';
        cursorOutline.style.top = e.clientY + 'px';
        cursorOutline.style.opacity = 1;
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', function() {
        cursorDot.style.opacity = 0;
        cursorOutline.style.opacity = 0;
    });
    
    // Check if user previously set a theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
    
    // Theme toggle functionality with animation
    themeToggle.addEventListener('click', function() {
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        themeToggle.appendChild(ripple);
        
        // Ripple animation
        setTimeout(() => {
            ripple.remove();
        }, 800);
        
        // Toggle theme with animation
        document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
        body.classList.toggle('dark-theme');
        
        // Update icon with animation
        const icon = themeToggle.querySelector('i');
        icon.style.animation = 'rotate360 0.5s ease';
        
        setTimeout(() => {
            icon.style.animation = '';
            if (body.classList.contains('dark-theme')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            }
        }, 250);
        
        // Apply dark mode to cards and other elements
        applyTheme();
    });
    
    // Add ripple style
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .ripple {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: rippleEffect 0.8s ease-out;
        }
        
        @keyframes rippleEffect {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(20);
                opacity: 0;
            }
        }
        
        @keyframes rotate360 {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Function to apply theme to specific elements
    function applyTheme() {
        const isDarkMode = body.classList.contains('dark-theme');
        
        // Update any dynamic elements that might need theme-specific styling
        if (isDarkMode) {
            document.querySelectorAll('.education-card, .timeline-content, .project-card').forEach(el => {
                el.style.backgroundColor = '#1e253a';
            });
            
            document.querySelectorAll('.education-details p, .timeline-content ul li, .project-info p').forEach(el => {
                el.style.color = '#e2e8f0';
            });
            
            // Update footer
            if (document.querySelector('footer')) {
                document.querySelector('footer').style.backgroundColor = '#0b1121';
                document.querySelectorAll('.footer-logo p, .copyright p').forEach(el => {
                    el.style.color = '#e2e8f0';
                });
            }
        } else {
            document.querySelectorAll('.education-card, .timeline-content, .project-card').forEach(el => {
                el.style.backgroundColor = 'white';
            });
            
            document.querySelectorAll('.education-details p, .timeline-content ul li, .project-info p').forEach(el => {
                el.style.color = '#333333';
            });
            
            // Update footer
            if (document.querySelector('footer')) {
                document.querySelector('footer').style.backgroundColor = '#1e293b';
                document.querySelectorAll('.footer-logo p, .copyright p').forEach(el => {
                    el.style.color = 'white';
                });
            }
        }
    }
    
    // Apply theme on page load
    applyTheme();
    
    // Add floating animation to profile shape
    const profileShape = document.querySelector('.profile-shape');
    if (profileShape) {
        profileShape.style.animation = 'morphing 8s ease-in-out infinite, float 6s ease-in-out infinite alternate';
    }
    
    // Add float animation style
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-20px);
            }
            100% {
                transform: translateY(0px);
            }
        }
    `;
    document.head.appendChild(floatStyle);
    
    // Sticky header on scroll with animation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
            header.style.transform = 'translateY(0)';
        } else {
            header.classList.remove('sticky');
        }
        
        // Parallax effect for sections
        const scrollPosition = window.pageYOffset;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop - window.innerHeight && 
                scrollPosition <= sectionTop + sectionHeight) {
                const speed = section.getAttribute('data-speed') || 0.2;
                section.style.backgroundPositionY = (scrollPosition - sectionTop) * speed + 'px';
            }
        });
    });
    
    // Add section data-speed attribute
    document.querySelectorAll('section').forEach((section, index) => {
        section.setAttribute('data-speed', (index % 2 === 0) ? '0.2' : '0.3');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Add ripple effect
                const rect = this.getBoundingClientRect();
                const ripple = document.createElement('div');
                ripple.className = 'ripple';
                ripple.style.left = (e.clientX - rect.left) + 'px';
                ripple.style.top = (e.clientY - rect.top) + 'px';
                this.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 800);
                
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to elements on scroll
    const animateElements = document.querySelectorAll('.skill-level, .interest-item, .timeline-item, .hobby-item, .education-card');
    
    const observerOptions = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
    
    // Mobile menu toggle (for responsive design)
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu-toggle';
    mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    nav.appendChild(mobileMenu);
    
    mobileMenu.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
        
        const icon = mobileMenu.querySelector('i');
        icon.style.animation = 'rotate360 0.5s ease';
        
        setTimeout(() => {
            icon.style.animation = '';
            if (navLinks.classList.contains('show')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        }, 250);
    });
    
    // Add responsive styles for mobile menu
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu-toggle {
            display: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: var(--text-color);
        }
        
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block;
            }
            
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: var(--background-color);
                box-shadow: var(--box-shadow);
                flex-direction: column;
                align-items: center;
                padding: 20px 0;
                clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
                transition: clip-path 0.4s ease;
            }
            
            .nav-links.show {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                display: flex;
            }
            
            .nav-links li {
                margin: 15px 0;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.3s ease, transform 0.3s ease;
                transition-delay: calc(0.1s * var(--i));
            }
            
            .nav-links.show li {
                opacity: 1;
                transform: translateY(0);
            }
            
            .dark-theme .nav-links {
                background-color: #1a1a2e;
            }
            
            .dark-theme .nav-links a {
                color: #e2e8f0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add transition delay to nav items
    document.querySelectorAll('.nav-links li').forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
    
    // Typing animation for hero section title
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typingSpeed = 100; // milliseconds
        
        function typeText() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeText, typingSpeed);
            } else {
                // Add blinking cursor after typing
                const cursor = document.createElement('span');
                cursor.className = 'typing-cursor';
                cursor.innerHTML = '|';
                heroTitle.appendChild(cursor);
                
                // Add cursor style
                const cursorStyle = document.createElement('style');
                cursorStyle.textContent = `
                    .typing-cursor {
                        animation: blink 1s infinite;
                        font-weight: normal;
                    }
                    
                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                `;
                document.head.appendChild(cursorStyle);
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(typeText, 500);
    }
}); 