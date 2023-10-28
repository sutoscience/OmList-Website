window.onload = function() {
    // Purpose: To handle the login popup
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('login-container');
    const overlay = document.getElementById('overlay');
    const navbarList = document.querySelector('#navbarId ul'); // Select the <ul> inside the navbar

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

    navbarList.addEventListener('click', function() {
        loginContainer.style.display = 'none';
        overlay.style.display = 'none'; // Hide overlay when navbar list is clicked
    });
}

