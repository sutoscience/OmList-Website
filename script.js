// Log-In Pop-Up Code
window.onload = function () {
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('login-container');
    const overlay = document.getElementById('overlay');
    const navbar = document.getElementById('navbar');

    if (loginButton && loginContainer && overlay && navbar) {
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
}

// About Page Scroll Bar
window.addEventListener('scroll', function () {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const progressHeight = (scrollPosition / scrollHeight) * 100;
        progressBar.style.height = progressHeight + 'vh';
    }
});

// About Page Smooth Scrolling
document.querySelectorAll('#sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// About Page - Progress Bar and Glow on Sidebar Links
window.addEventListener('scroll', function () {
    const sidebar = document.getElementById('sidebar');
    const progressBar = document.getElementById('progress-bar');
    const sections = document.querySelectorAll('#content section');
    const links = document.querySelectorAll('#sidebar a');

    if (sidebar && progressBar && sections && links.length > 0) {
        const sidebarLinksHeight = sidebar.offsetHeight;
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const windowScroll = window.scrollY;

        // Calculate the percentage of the total scroll height where the sidebar links are covered
        const progressPercentage = (windowScroll / totalHeight) * 100;

        // Calculate the progress bar height based on the percentage and sidebar links height
        progressBar.style.height = (progressPercentage / 100) * (sidebarLinksHeight * 1.5) + 'px';

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                links.forEach(link => {
                    link.classList.remove('active');
                    link.classList.remove('glow');
                });
                links[index].classList.add('active');
                links[index].classList.add('glow');
            }
        });
    }
});

// Create Account - Pop-Up
document.addEventListener('DOMContentLoaded', function() {
    var createAccountButton = document.getElementById('createAccountButton');
    var createAccountPopup = document.getElementById('create-account-popup');

    if (createAccountButton && createAccountPopup) {
        // Listener for opening the popup
        createAccountButton.addEventListener('click', function(event) {
            event.preventDefault();
            createAccountPopup.style.display = 'block';
        });

        // Listener for closing the popup if the user clicks outside of it
        window.addEventListener('click', function(event) {
            if (event.target === createAccountPopup) {
                createAccountPopup.style.display = 'none';
            }
        });

        // Stop the click inside the popup from propagating to the window
        var popupContent = document.querySelector('#create-account-popup .popup-content');
        if (popupContent) {
            popupContent.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        }
    }
});



/* Swipe Screen */

document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-button');
    const dislikeButtons = document.querySelectorAll('.dislike-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Handle like
            swipeMovie(this.parentElement, 'like');
        });
    });

    dislikeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Handle dislike
            swipeMovie(this.parentElement, 'dislike');
        });
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            // Handle like with right arrow key
            swipeMovie(document.querySelector('.movie-card'), 'like');
        } else if (event.key === 'ArrowLeft') {
            // Handle dislike with left arrow key
            swipeMovie(document.querySelector('.movie-card'), 'dislike');
        }
    });

    function swipeMovie(movieCard, action) {
        // Logic to animate and remove the card, and to track likes/dislikes
    }
});


