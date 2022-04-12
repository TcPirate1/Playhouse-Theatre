'use strict';
window.onload = function init() {
    // when page loads attach event to validate form                         
    let formsubmit = document.getElementById("sign-in");
    let register = document.getElementById("register");
    
    if (register) {
        register.onclick= function passwordValidate (){
            let valid = true;
            let password = document.getElementById('pword').value;
            let password_msg = document.getElementById('password_msg');
            //Password expression for validation
            let passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            if (!passwordRegExp.test(password)) {
                password_msg.innerHTML = "Enter a password with:A lower case letter, an uppercase letter, a number and at least 8 characters long."
                password_msg.className = 'error';
                valid = false;
            }

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

            if (valid!==false) {
                document.querySelector('body').innerHTML = '<p>Thank you for register, you will be redirected to the seating layout! (Currently not implemented) for now click <a href="bookings.html">here</a> to go back to the booking page.</p>';
            }
            return valid;
        };
    }
}

if (formsubmit) {
    formsubmit.onclick = checkForm;
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
    
    if (password===''||password.length<8) {
        password_msg.innerHTML = "Must enter password";
        password_msg.className = 'error';
        valid = false;
    }
    else {
        password_msg.innerHTML = "";
        password_msg.className = '';
    }
    
    if (valid!==false) {
        document.querySelector('body').innerHTML = '<p>Thank you for signing in, you will be redirected to the seating layout! (Currently not implemented) for now click <a href="bookings.html">here</a> to go back to the booking page.</p>';
    }
    return valid;
}