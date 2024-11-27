// Navigation menu toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle?.addEventListener('click', () => {
        nav.classList.toggle('active');

    const img = new Image();
        img.src = 'images/official account qrcode.jpg';
    });
});

