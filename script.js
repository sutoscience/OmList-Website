window.onload = function () {
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('login-container');
    const overlay = document.getElementById('overlay');
    const navbar = document.getElementById('navbarId');

    document.addEventListener('click', function (event) {
        let target = event.target;

        if (target === loginButton) {
            toggleLoginPopup();
        } else if (target !== navbar && !navbar.contains(target) && target !== loginContainer && !loginContainer.contains(target)) {
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
