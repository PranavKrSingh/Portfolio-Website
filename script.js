function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight - 100;

    sections.forEach((section, index) => {
        if (section.offsetTop < scrollPos) {
            section.classList.add('visible');
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });

    document.getElementById('back-to-top').style.display =
        window.scrollY > 200 ? 'block' : 'none';
});
