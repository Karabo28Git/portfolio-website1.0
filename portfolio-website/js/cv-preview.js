document.addEventListener('DOMContentLoaded', function() {
    // CV download functionality is already working via direct link
    // This file ensures no console errors when the script is loaded
    console.log('CV section initialized - download ready');
    
    // Optional: Track CV downloads
    const cvDownloadBtn = document.querySelector('#cv .btn');
    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', function() {
            console.log('CV download initiated');
        });
    }
});