// Consolidating all code under one DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function () {
    const allCards = document.querySelectorAll('.tinder--card');
    const nopeIndicator = document.querySelector('.fa-remove');
    const loveIndicator = document.querySelector('.fa-heart');

    // Handling swipe cards
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
            handleSwipeEnd(event, card);
        });
    });

    // Swipe end handler
    function handleSwipeEnd(event, card) {
        if (Math.abs(event.deltaX) > 80) {
            const outOfScreenX = (event.deltaX > 0) ? window.innerWidth : -window.innerWidth;
            card.style.transition = 'transform 0.5s ease-in-out';
            card.style.transform = 'translate(' + outOfScreenX + 'px, ' + event.deltaY + 'px)';
            setTimeout(() => card.remove(), 500);
        } else {
            card.style.transition = 'transform 0.5s ease-in-out';
            card.style.transform = 'translate(0px, 0px)';
        }
    }
    
    // Function to find the topmost card
    function getTopCard() {
        const allCards = document.querySelectorAll('.tinder--card');
        return allCards.length > 0 ? allCards[allCards.length - 1] : null;
    }

    // Updated like and dislike button handlers
    const likeButton = document.getElementById('like');
    const dislikeButton = document.getElementById('dislike');

    likeButton.addEventListener('click', function() {
        const topCard = getTopCard();
        if(topCard) {
            animateCard(topCard, true); // True for like
        }
    });

    dislikeButton.addEventListener('click', function() {
        const topCard = getTopCard();
        if(topCard) {
            animateCard(topCard, false); // False for dislike
        }
    });

    // Updated animateCard function
    function animateCard(card, isLiked) {
        if(card) {
            const outOfScreenX = isLiked ? window.innerWidth : -window.innerWidth;
            card.style.transition = 'transform 0.5s ease-in-out';
            card.style.transform = 'translate(' + outOfScreenX + 'px, 0px)';
            setTimeout(() => card.remove(), 500);
        }
    }


    // Existing logout function
    function logoutFunction() {
        window.location.href = 'index.html'; // Redirect to index.html after logout
    };
});
