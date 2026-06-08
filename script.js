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