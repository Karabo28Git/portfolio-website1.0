document.addEventListener('DOMContentLoaded', function() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    // Open modal on certificate click
    certificateCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Get the background image URL
            const bgImage = window.getComputedStyle(this).backgroundImage;
            // Extract URL from url('...') format
            const imageUrl = bgImage.replace(/url\(["']?([^"']*)["']?\)/g, '$1');
            const title = this.querySelector('.certificate-info h3').textContent;
            const issuer = this.querySelector('.certificate-info p').textContent;
            
            console.log('Image URL:', imageUrl); // For debugging
            
            modalImg.src = imageUrl;
            document.getElementById('caption').textContent = title + ' - ' + issuer;
            modal.style.display = 'block';
        });
    });

    // Close modal on X click
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal on outside click
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});