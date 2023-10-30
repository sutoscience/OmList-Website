window.onload = function () {
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('login-container');
    const overlay = document.getElementById('overlay');

    loginButton.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleLoginPopup();
    });

    overlay.addEventListener('click', function () {
        closeLoginPopup();
    });
    
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

document.addEventListener('click', function(event) {
    const popup = document.querySelector('.login-popup');
    if (!popup.contains(event.target)) {
        // close the popup
    }
});
