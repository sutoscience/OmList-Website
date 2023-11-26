// Swipescreen Page Code
document.addEventListener('DOMContentLoaded', function () {
    const allCards = document.querySelectorAll('.tinder--card');
    const nopeIndicator = document.querySelector('.fa-remove');
    const loveIndicator = document.querySelector('.fa-heart');

    if (allCards.length === 0) {
        console.error('No tinder cards found.');
        return;
    }

    allCards.forEach(function (card) {
        const hammertime = new Hammer(card);
        hammertime.on('pan', function (event) {
            card.classList.add('moving');
            card.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px)';
            if (event.deltaX > 0) loveIndicator.style.opacity = 1;
            else if (event.deltaX < 0) nopeIndicator.style.opacity = 1;
        });

        hammertime.on('panend', function (event) {
            card.classList.remove('moving');
            loveIndicator.style.opacity = 0;
            nopeIndicator.style.opacity = 0;
            if (Math.abs(event.deltaX) > 80) {
                const outOfScreenX = (event.deltaX > 0) ? window.innerWidth : -window.innerWidth;
                card.style.transition = 'transform 0.5s ease-in-out';
                card.style.transform = 'translate(' + outOfScreenX + 'px, ' + event.deltaY + 'px)';
                setTimeout(() => card.remove(), 500);
            } else {
                card.style.transition = 'transform 0.5s ease-in-out';
                card.style.transform = 'translate(0px, 0px)';
            }
        });
    });
});

// Swipescreen - event listener for like or dislike buttons

document.addEventListener('DOMContentLoaded', function () {
    const likeButton = document.getElementById('like');
    const dislikeButton = document.getElementById('dislike');

    likeButton.addEventListener('click', function() {
        // Handle like action here
        console.log('Liked');
    });

    dislikeButton.addEventListener('click', function() {
        // Handle dislike action here
        console.log('Disliked');
    });
});

/* Navbar - Profile Page Logout */

function logoutFunction() {
    // Your logout code here
    // Redirect to index.html after logout
    window.location.href = 'index.html';
};