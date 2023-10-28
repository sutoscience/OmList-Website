window.onload = function () {
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('login-container');
    const overlay = document.getElementById('overlay');
    const navbar = document.getElementById('navbarId');
    const logo = document.getElementById('logoId');

    document.addEventListener('click', function (event) {
        if (event.target === loginButton) {
            toggleLoginPopup();
        } else if (!loginContainer.contains(event.target) && event.target !== navbar && event.target !== logo) {
            closeLoginPopup();
        }
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
