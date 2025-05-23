document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to switch tabs
    function switchTab(event) {
        // Remove active class from all buttons and content
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked button and corresponding content
        const tabId = event.currentTarget.dataset.tab;
        event.currentTarget.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    }

    // Add event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });

    // Optional: Form submission handling (basic example, actual submission needs backend/service)
    const form = document.getElementById('modelOnboardingForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            // Prevent default if you want to handle via JS, otherwise let it submit to Formspree
            // For Formspree, default submission is usually fine.
            // You might add client-side validation here if needed.

            // Example: Alert after submission attempt (Formspree will handle the actual redirect/thank you)
            // setTimeout(() => {
            //     alert('Thank you for submitting your information! We will be in touch soon.');
            // }, 100); // Small delay to allow form submission to initiate
        });
    }
});
