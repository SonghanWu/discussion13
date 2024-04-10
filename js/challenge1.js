// Get the checkbox and email field elements
const toggleCheckbox = document.getElementById('toggle');
const emailField = document.getElementById('emailBox');

// Add an event listener to the checkbox
toggleCheckbox.addEventListener('change', function() {
    // Check if the checkbox is checked
    if (toggleCheckbox.checked) {
        // Show the email field
        emailField.style.display = 'block';
    } else {
        // Hide the email field
        emailField.style.display = 'none';
    }
});