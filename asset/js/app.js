const image = document.querySelector('.image-box img');

image.addEventListener('mouseenter', () => {
    image.style.animation = 'none'; // Stop the up and down animation
});

image.addEventListener('mousemove', (e) => {
    const box = image.getBoundingClientRect();
    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;
    const rotateX = (centerY - e.clientY) / 10;
    const rotateY = (e.clientX - centerX) / 10;
    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

image.addEventListener('mouseleave', () => {
    image.style.transform = 'rotate(0deg)';
    image.style.animation = 'upAndDown 2s infinite'; // Resume the up and down animation
});