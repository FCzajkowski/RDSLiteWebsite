document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.getDatabase');
    
    buttons[0].addEventListener('click', function() {
        window.location.href = 'https://github.com/FCzajkowski/RDSLite/releases/tag/official';
    });
    
    buttons[1].addEventListener('click', function() {
        window.location.href = 'https://github.com/FCzajkowski/RDSLite/blob/main/DOCUMENTATION.md';
    });
});

