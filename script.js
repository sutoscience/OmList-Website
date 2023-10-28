window.onload = function() {
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('login-container');
    const overlay = document.getElementById('overlay');
    const closeTriggers = document.querySelectorAll('.close-login');

    document.addEventListener('click', function(event) {
        if (event.target === loginButton) {
            toggleLoginPopup();
        } else if (!loginContainer.contains(event.target)) {
            closeLoginPopup();
        }
    });

    closeTriggers.forEach(element => {
        element.addEventListener('click', closeLoginPopup);
    });

    function toggleLoginPopup() {
        if (loginContainer.style.display === 'none' || loginContainer.style.display === '') {
            loginContainer.style.display = 'block';
            overlay.style.display = 'block';
        } else {
            closeLoginPopup();
        }
    }

    function closeLoginPopup() {
        loginContainer.style.display = 'none';
        overlay.style.display = 'none';
    }
}
