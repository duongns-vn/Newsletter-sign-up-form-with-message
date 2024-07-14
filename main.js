
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the DOM elements
    const email = document.getElementById('input_form');
    const errorMessage = document.getElementById('error_message');
    const submitButton = document.getElementById('form_button');
    const successMessage = document.getElementById('successMessage');
    const userEmail = document.getElementById('yourEmail');
    const newsletter = document.querySelector('.newsletter')
    const dismissButton = document.querySelector('.dismiss_button');

    // Regular expression pattern for validating email addresses
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Function to update the button state based on email validity
    function updateButtonState() {
        if (emailPattern.test(email.value)) {
            errorMessage.style.display = 'none';
            email.classList.remove('invalid');
            submitButton.classList.add('active_button');
            submitButton.style.cursor = 'pointer';

        } else {
            errorMessage.style.display = 'block';
            submitButton.classList.remove('active_button');
            email.classList.add('invalid');
            submitButton.style.cursor = 'initial';
        }
    }

    // Event listener to validate email on input change
    // email.addEventListener('input', updateButtonState);

    // Event listeners to change button color on hover if email is valid
    submitButton.onmouseover = updateButtonState;
    submitButton.onmouseleave = updateButtonState;

    // Event listener to handle form submission
    submitButton.addEventListener('click', () => {
        if (submitButton.classList.contains('active_button')) {
            userEmail.textContent = email.value;
            newsletter.style.display = 'none';
            successMessage.style.display = 'flex';
        } else {
            updateButtonState;
        }
    });

    // Event listener to dismiss success message
    dismissButton.addEventListener('click', () => {
        successMessage.style.display = 'none';
        newsletter.style.display = 'flex';
        email.value = '';
    })

});