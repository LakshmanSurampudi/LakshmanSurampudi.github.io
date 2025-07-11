document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('filter');
    const projectCards = document.querySelectorAll('.project-cards .card');

    filterSelect.addEventListener('change', function() {
        const selectedSkill = this.value;

        projectCards.forEach(card => {
            const cardSkill = card.getAttribute('timeline');
            if (selectedSkill === 'all' || selectedSkill === cardSkill) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Certificate modal functionality
    const modal = document.getElementById('certificateModal');
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeCertificateModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeCertificateModal();
        }
    });
});

// Certificate modal functions
function openCertificateModal(certId) {
    const modal = document.getElementById('certificateModal');
    const certificateImage = document.getElementById('certificateImage');
    
    // Define certificate image paths (you can replace these with actual certificate images)
    const certificateImages = {
        'cert1': 'Intellipaat-certificate.jpg',
        'cert2': 'https://via.placeholder.com/800x600/764ba2/ffffff?text=Coursera+Python+for+Data+Science+Certificate',
        'cert3': 'https://via.placeholder.com/800x600/2d3748/ffffff?text=Microsoft+SQL+Server+Certification'
    };
    
    certificateImage.src = certificateImages[certId];
    modal.style.display = 'block';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
} 