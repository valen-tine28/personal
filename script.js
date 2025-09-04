const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('show');
});

// Set the current year in the footer
const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Initialize feather icons
feather.replace();

// Function to apply theme
function applyTheme(theme) {
    console.log('Applying theme:', theme);
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        icon.setAttribute('data-feather', 'moon');
    } else {
        body.classList.remove('dark-theme');
        icon.setAttribute('data-feather', 'sun');
    }
    feather.replace();
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
console.log('Saved theme:', savedTheme);
applyTheme(savedTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', function () {
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    console.log('Toggling theme from', currentTheme, 'to', newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

// // Feedback modal functionality
// const feedbackBtn = document.getElementById('feedback-btn');
// const modal = document.getElementById('feedback-modal');
// const closeBtn = document.querySelector('.close');
// const feedbackForm = document.getElementById('feedback-form');

// if (feedbackBtn && modal && closeBtn && feedbackForm) {
//     // Open modal
//     feedbackBtn.addEventListener('click', function () {
//         modal.style.display = 'block';
//     });

    // Close modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const message = document.getElementById('feedback-message').value;
        if (message.trim()) {
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                message: message
            })
            .then(function(response) {
                alert('Thank you for your feedback! We appreciate your input.');
                modal.style.display = 'none';
                feedbackForm.reset();
            }, function(error) {
                alert('Failed to send feedback. Please try again later.');
                console.error('EmailJS error:', error);
            });
        } else {
            alert('Please enter a message.');
        }
    });
} else {
    console.error('One or more feedback modal elements not found in the DOM.');
}
