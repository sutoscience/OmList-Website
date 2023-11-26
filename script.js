let access_token = "";

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

// Sign-up submit code
document.getElementById('create-account-popup').addEventListener('submit', function(event){
    event.preventDefault();

    // Gather data from the form
    var formData = {
        name: document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password-user').value
    };

    // Create the fetch request
    fetch("http://3.12.228.217:3030/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            // If the response is not ok, parse and log it before throwing an error
            return response.json().then(errorData => {
                console.error("Error Response Body:", errorData);
                throw new Error('Network response was not ok: ' + response.statusText);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log("Account created successfully", data);
        access_token = data.access_token;
        document.getElementById('create-account-popup').style.display = 'none';
    })
    .catch(error => {
        console.error("Error in account creation", error);
    });
});

document.getElementById('get-user-button').addEventListener('click', function(event){
    event.preventDefault();

    fetch("http://3.12.228.217:3030/user", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + access_token,
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                console.error("Error Response Body:", errorData);
                throw new Error('Network response was not ok: ' + response.statusText);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log("User fetched successfully", data);
    })
    .catch(error => {
        console.error("Error in user fetching", error);
    });
});



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



/* Swipe Screen Page */

var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');

if (tinderContainer && allCards.length > 0) {
    initCards();
}

function initCards() {
    allCards.forEach(function(card) {
        var hammertime = new Hammer(card);
        hammertime.on('pan', function(event) {
            card.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px)';
        });

        hammertime.on('panend', function(event) {
            if (Math.abs(event.deltaX) > 100 || Math.abs(event.velocityX) > 0.5) {
                card.style.transform = 'translate(' + event.deltaX * 3 + 'px, ' + event.deltaY * 3 + 'px)';
                setTimeout(() => card.remove(), 200);
            } else {
                card.style.transform = ''; // Reset card position
            }
        });
    });
}

// Initialize all cards
allCards.forEach(initCardSwipe);


/* Profile Page */

// JavaScript to change the profile picture when a new file is selected
document.getElementById('profile-picture-upload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('profile-picture').src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});


/* Navbar - Profile Page Logout */

function logoutFunction() {
    // Your logout code here
    // Redirect to index.html after logout
    window.location.href = 'index.html';
  }
  
