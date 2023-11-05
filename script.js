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

// About Page Smooth Scrolling

document.querySelectorAll('#sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('#sidebar a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
        }
    });
});

// About Page - Progress Bar

window.addEventListener('scroll', function () {
    const sidebarLinksHeight = document.getElementById('sidebar').offsetHeight;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const windowScroll = window.scrollY;
    
    // Calculate the percentage of the total scroll height where the sidebar links are covered
    const progressPercentage = (windowScroll / totalHeight) * 100;
    
    // Calculate the progress bar height based on the percentage and sidebar links height
    // You might want to manually adjust the multiplier to ensure it reaches the bottom
    const progressBarHeight = (progressPercentage / 100) * (sidebarLinksHeight * 1.5); // Adjust the multiplier as needed
    
    document.getElementById('progress-bar').style.height = progressBarHeight + 'px';
});

// About Page - Glow on Sidebar Links

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('#content section');
    const links = document.querySelectorAll('#sidebar a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 200; // Adjust this value as needed

        if (window.scrollY >= sectionTop) {
            links.forEach(link => link.classList.remove('glow'));
            links[index].classList.add('glow');
        }
    });
});

// Create Account - Pop-Up
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Create Account" button and the popup element
    var createAccountButton = document.getElementById('createAccountButton');
    var createAccountPopup = document.getElementById('create-account-popup');

    // Listener for opening the popup
    createAccountButton.addEventListener('click', function(event) {
        // Prevent the default button action
        event.preventDefault();
        // Show the popup
        createAccountPopup.style.display = 'block';
    });

    // Listener for closing the popup if the user clicks outside of it
    window.addEventListener('click', function(event) {
        // Check if the click is outside the popup content
        if (event.target === createAccountPopup) {
            // Hide the popup
            createAccountPopup.style.display = 'none';
        }
    });

    // Stop the click inside the popup from propagating to the window
    document.querySelector('#create-account-popup .popup-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
});


