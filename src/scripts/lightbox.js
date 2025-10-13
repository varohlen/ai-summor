document.addEventListener('DOMContentLoaded', () => {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    
    // Create a container for the image with white background
    const imageContainer = document.createElement('div');
    imageContainer.className = 'lightbox-container';
    
    const lightboxImg = document.createElement('img');
    imageContainer.appendChild(lightboxImg);
    lightbox.appendChild(imageContainer);
    
    document.body.appendChild(lightbox);
    
    // Add click handlers to all content images
    document.querySelectorAll('.prose img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });
    
    // Close lightbox when clicking outside the image container
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg && e.target !== imageContainer) {
            lightbox.classList.remove('active');
        }
    });
    
    // Close lightbox with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
});
