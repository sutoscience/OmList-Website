window.onload = function() {
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
        if (!loginButton.contains(event.target) && event.target !== loginButton) { 
            loginContainer.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
    
}
