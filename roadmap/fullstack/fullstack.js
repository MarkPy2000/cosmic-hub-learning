document.addEventListener('DOMContentLoaded', function() {
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    const searchInput = document.querySelector('.roadmap-search');

    roadmapItems.forEach(item => {
        const title = item.querySelector('h3');
        title.addEventListener('click', () => {
            item.classList.toggle('collapsed');
        });
        // Initialize items as expanded
        item.classList.remove('collapsed');
    });

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        roadmapItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Add click event listeners to filter buttons
    document.querySelectorAll('.filter-container button').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.textContent.toLowerCase();
            filterItems(category === 'all' ? 'all' : category);
        });
    });

    function filterItems(category) {
        roadmapItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
