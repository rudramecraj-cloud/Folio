const themeToggle = document.querySelector('#theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});
const toTopBtn = document.querySelector('#to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
});
toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const skillFilterButtons = document.querySelectorAll('.skill-filter-btn');
const skillItems = document.querySelectorAll('[data-skill-category]');

// Initialize: hide non-technical skills on page load since "Technical" is active by default
skillItems.forEach(skill => {
    if (skill.getAttribute('data-skill-category') !== 'technical') {
        skill.style.display = 'none';
    }
});

skillFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');
        
        // Update active button
        skillFilterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show/hide skills
        skillItems.forEach(skill => {
            if (skill.getAttribute('data-skill-category') === filterValue) {
                skill.style.display = 'block';
            } else {
                skill.style.display = 'none';
            }
        });
    });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
revealItems.forEach(item => {
    observer.observe(item);
});