// Purpose: To handle the login popup
const loginButton = document.getElementById('loginButton');
const loginContainer = document.getElementById('login-container');


document.addEventListener('click', function(event) {
    var loginContainer = document.getElementById('login-container');
    var loginButton = document.getElementById('loginButton');

    // Check if the click is outside the login popup and not on the login button
    if (!loginContainer.contains(event.target) && event.target !== loginButton) {
        loginContainer.style.display = 'none';
    }
});

loginButton.addEventListener('click', function() {
    if (loginContainer.style.display === 'none' || loginContainer.style.display === '') {
        loginContainer.style.display = 'block';
    } else {
        loginContainer.style.display = 'none';
    }
});

function submitFunction() {
    alert('Button has been clicked!');
    // Place any other function or logic you want to execute here
}

function toggleLoginPopup() {
    var popup = document.getElementById('login-container');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}