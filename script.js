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



/* Swipe Screen Page */

'use strict';

var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');
var nope = document.getElementById('dislike');
var love = document.getElementById('like');

function initCards(card, index) {
  var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });
  
  tinderContainer.classList.add('loaded');
}

initCards();

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');
    tinderContainer.classList.remove('tinder_love');
    tinderContainer.classList.remove('tinder_nope');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
      initCards();
    }
  });
});

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (like) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);
