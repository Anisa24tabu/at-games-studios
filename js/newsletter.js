function atGamesWelcome() {
    alert("Welcome to AT Games Studios Newsletter Signup!");
};

function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!firstName) {
        alert("Please enter your First Name.");
        return;
    } 
    
    if (!lastName) {
        alert("Please enter your Last Name.");
        return;
    } 
    
    if (!email) {
        alert("Please enter your email address.");
        return
    }

    alert(`Awesome, ${firstName}! You've successfully joined our gaming community. Stay tuned for exclusive content and special offers.`);
};
