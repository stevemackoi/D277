document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirmEmail');

    form.addEventListener('submit', function(event) {
        if (email.value !== confirmEmail.value) {
            alert('Email addresses do not match. Please try again.');
            event.preventDefault();
        }
    });
});
