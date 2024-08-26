document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('content');

    // Function to load content from a URL into the content container
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                // Inject the HTML content into the container
                contentContainer.innerHTML = html;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    // Load default content (optional)
    loadContent('blog.html'); // Default to loading blog content

    // Handle SPA Navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const url = link.getAttribute('href');
            loadContent(url);
        });
    });

    // Toggle Dark/Light Mode
    const toggleSwitch = document.getElementById('toggle');

    toggleSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });
});
