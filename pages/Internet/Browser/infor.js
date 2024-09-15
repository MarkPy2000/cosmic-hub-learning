// Example animations for interactive content
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-content');

    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'scale(1.05)';
            section.style.transition = 'transform 0.3s ease';
        });

        section.addEventListener('mouseout', () => {
            section.style.transform = 'scale(1)';
        });
    });
});
