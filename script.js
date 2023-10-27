// Purpose: To handle the login popup
const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');

loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default action (page navigation)
    
    if (loginPopup.style.display === 'none' || loginPopup.style.display === '') {
        loginPopup.style.display = 'block';
    } else {
        loginPopup.style.display = 'none';
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
