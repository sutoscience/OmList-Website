// Log-In Pop-Up Code

window.onload = function () {
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('login-container');
    const overlay = document.getElementById('overlay');
    const navbar = document.getElementById('navbar');

    loginButton.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleLoginPopup();
    });

    document.addEventListener('click', closeLoginPopup);
    navbar.addEventListener('click', closeLoginPopup);
    loginContainer.addEventListener('click', function (event) {
        event.stopPropagation();
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

// About Page Scroll Bar

window.addEventListener('scroll', function () {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progressBar = document.getElementById('progress-bar');

    const progressHeight = (scrollPosition / scrollHeight) * 100;
    progressBar.style.height = progressHeight + 'vh';
});
