'use strict';
window.onload = function init() {
    // when page loads attach event to validate form                         
    let formsubmit = document.getElementById("sign-in");
    let register = document.getElementById("register");

    if (formsubmit) {
        formsubmit.onclick = checkForm;
    }
    if (register) {
        register.addEventListener("click", checkForm);
    }

    function checkForm() {
        // Must be valid email address.
        let valid = true;
        let email = document.getElementById('email').value;
        let email_msg = document.getElementById('email_msg');
        
        //	regular expression for validation
        let emailRegExp = /^(\w+@[a-z\d]+?([a-z-\d_\.]*?)\.[a-z]{2,6})$/i; 
        
        if (!emailRegExp.test(email)) {
            email_msg.innerHTML = "Must be a valid email address";
            email_msg.className = 'error';
            valid = false;
        } else {
            email_msg.innerHTML = "";
            email_msg.className = '';
        }

        let password = document.getElementById('pword').value;
        let password_msg = document.getElementById('password_msg');
        //	regular expression for validation (must contain 8 or more characters, 1 lowercase letter, 1 uppercase letter & 1 number)
        let passRegExp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        
        if (!passRegExp.test(password)) {
            password_msg.innerHTML = "Must enter password with 8 characters or more, 1 lowercase letter, 1 uppercase letter and 1 number";
            password_msg.className = 'error';
            valid = false;
        }
        else {
            password_msg.innerHTML = "";
            password_msg.className = '';
        }
        
        if (valid!==false&&formsubmit) {
            document.querySelector('body').innerHTML = '<p>Thank you for signing in, you will be redirected to the seating layout! (Currently not implemented) for now click <a href="bookings.html">here</a> to go back to the booking page.</p>';
        }//Displays different messages depending on what button is pressed
        if (valid!==false&&register) {
            document.querySelector('body').innerHTML = '<p>Thank you for registering, you will be redirected to the registration! (Currently not implemented) for now click <a href="bookings.html">here</a> to go back to the booking page.</p>';
        }
        return valid;
    }
}