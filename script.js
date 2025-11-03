// ===== FUNCTION: OPEN TAB =====
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // Remove active class from all tab buttons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Show current tab and add active class to button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");

    // Animate skill bars when opening keahlian tab
    if(tabName === 'keahlian') {
        animateSkills();
    }
}

// ===== FUNCTION: ANIMATE SKILL BARS =====
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 100);
    });
}

// ===== EVENT: PAGE LOAD =====
window.addEventListener('load', function() {
    // Animate skill bars on page load if keahlian tab is active
    if(document.getElementById('keahlian').classList.contains('active')) {
        animateSkills();
    }

    // Add entrance animation for achievement cards
    setupAchievementAnimations();
});

// ===== FUNCTION: SETUP ACHIEVEMENT ANIMATIONS =====
function setupAchievementAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to all achievement cards
    document.querySelectorAll('.achievement-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== INTERACTIVE FEATURES =====

// Add hover effect sound (optional - can be commented out)
function addHoverSound() {
    const buttons = document.querySelectorAll('.contact-btn, .tab-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // You can add sound effect here if needed
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Initialize interactive features
addHoverSound();

// ===== CONSOLE MESSAGE =====
console.log('%c✨ CV Online berhasil dimuat! ✨', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cDibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript', 'color: #764ba2; font-size: 14px;');

// ===== EASTER EGG: Keyboard Shortcut =====
document.addEventListener('keydown', function(e) {
    // Press 1, 2, 3, 4 to switch tabs
    if(e.key === '1') {
        document.querySelector('.tab-btn:nth-child(1)').click();
    } else if(e.key === '2') {
        document.querySelector('.tab-btn:nth-child(2)').click();
    } else if(e.key === '3') {
        document.querySelector('.tab-btn:nth-child(3)').click();
    } else if(e.key === '4') {
        document.querySelector('.tab-btn:nth-child(4)').click();
    }
});

// ===== FUNCTION: PRINT CV =====
function printCV() {
    window.print();
}

// Optional: Add print button functionality
// You can add a print button in HTML and call this function

// ===== PERFORMANCE: Lazy Loading Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img.lazy');
    images.forEach(img => imageObserver.observe(img));
}