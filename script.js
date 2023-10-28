// Purpose: To handle the login popup
const loginButton = document.getElementById('loginButton');
const loginContainer = document.getElementById('login-container');
const overlay = document.getElementById('overlay');

document.addEventListener('click', function(event) {
    var isClickInside = loginContainer.contains(event.target) || event.target === loginButton;

    // Check if the click is outside the login popup and not on the login button
    if (!isClickInside && loginContainer.style.display === 'block') {
        loginContainer.style.display = 'none';
        overlay.style.display = 'none'; // Hide overlay
    }
});

loginButton.addEventListener('click', function() {
    if (loginContainer.style.display === 'none' || loginContainer.style.display === '') {
        loginContainer.style.display = 'block';
        overlay.style.display = 'block'; // Show overlay
    } else {
        loginContainer.style.display = 'none';
        overlay.style.display = 'none'; // Hide overlay
    }
});

overlay.addEventListener('click', function() {
    loginContainer.style.display = 'none';
    overlay.style.display = 'none'; // Hide overlay when it is clicked
});

document.getElementById('navbarId').addEventListener('click', function(event) {
    if (event.target !== loginButton) { // Check if the clicked element is not the login button
        loginContainer.style.display = 'none';
        overlay.style.display = 'none';
    }
});

// Other functions can go here
