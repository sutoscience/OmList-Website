window.onload = function() {
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('login-container');
    const overlay = document.getElementById('overlay');
    const navbar = document.getElementById('navbarId');

    document.addEventListener('click', function(event) {
        var isClickInsideLogin = loginContainer.contains(event.target) || event.target === loginButton;
        var isClickInsideNavbar = navbar.contains(event.target) && event.target !== loginButton;

        if (event.target === loginButton) {
            if (loginContainer.style.display === 'none' || loginContainer.style.display === '') {
                loginContainer.style.display = 'block';
                overlay.style.display = 'block';
            } else {
                loginContainer.style.display = 'none';
                overlay.style.display = 'none';
            }
        } else if (!isClickInsideLogin && !isClickInsideNavbar) {
            loginContainer.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
}
