function atGamesWelcome() {
    var welcomeMessage = "Welcome to AT Games Studios Newsletter Signup!";
    alert(welcomeMessage);
}

function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var email = document.getElementById('email').value.trim();

    if (!firstName) {
        var firstNameMsg = "Please enter your First Name.";
        alert(firstNameMsg);
        return;
    }

    if (!lastName) {
        var lastNameMsg = "Please enter your Last Name.";
        alert(lastNameMsg);
        return;
    }

    if (!email) {
        var emailMsg = "Please enter your email address.";
        alert(emailMsg);
        return;
    }

    var successMessage = "Awesome, " + firstName + "! You've successfully joined our gaming community. Stay tuned for exclusive content and special offers.";
    alert(successMessage);
}
