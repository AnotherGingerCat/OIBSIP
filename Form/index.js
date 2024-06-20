function validate() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirm_password = document.getElementById('confirm_password').value

    check_username(username);
    check_email(email);
    check_password(password);
    check_confirm_password(password, confirm_password);

    if(check_username(username) && check_email(email) && check_password(password) && check_confirm_password(password, confirm_password)) {
        window.location.href = "./pageRedirect.html";
     }
}

function check_username(username) {
    if(username.length > 7) {
        
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerText=''
        return 1;
    }
    else {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='the username must be 8 characters long!'
        return 0;
    }
}

function check_email(email) {
    if(email.length>8 && email.includes('@gmail.com')) {
        
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerText=''
        return 1;
    }
    else {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='the email is not valid!'
        return 0;
    }
}

function check_password(password) {
    if(password.length>8 && password.includes('.')) {
        
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password_error').innerText=''
        return 1;
    }
    else {
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='the password must contain . '
        return 0;
    }
}

function check_confirm_password(password, confirm_password) {
    if(password==confirm_password && password!='') {
        
        document.getElementById('confirm_password').classList.add('success')
        document.getElementById('confirm_password').classList.replace('error','success')
        document.getElementById('confirm_password_error').innerText=''
        return 1;
    }
    else {
        document.getElementById('confirm_password').classList.add('error')
        document.getElementById('confirm_password_error').innerText='the password does not match!'
        return 0;
    }
}