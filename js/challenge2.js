document.querySelector("input[type='checkbox']").addEventListener('change', function() {
    var billingAddress = document.getElementById('billing').value;
    var homeAddressField = document.getElementById('home');

    if (this.checked) {
        homeAddressField.value = billingAddress;
        homeAddressField.disabled = true; // Disable the home address field to prevent editing
    } else {
        homeAddressField.disabled = false; // Enable the home address field for editing
    }
});
