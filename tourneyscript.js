
document.addEventListener('DOMContentLoaded', function () {
    var leftMovie = document.getElementById('movieLeft');
    var rightMovie = document.getElementById('movieRight');

        // This function ensures we're always getting the top card.
        function getTopCard() {
            const allCards = document.querySelectorAll('.movie-card:not(.burned)');
            return allCards[allCards.length - 1]; // The last card in the array is the topmost one.
        }
    
        function removeMovie(direction) {
            const movieElement = getTopCard(); // Always get the top card
    
            if (!movieElement) return; // If there's no card, don't do anything
    
            // Trigger the flame animation
            movieElement.classList.add('flame');
    
            // Wait for the animation to finish before removing the movie poster
            setTimeout(function () {
                movieElement.classList.add('remove');
                movieElement.classList.add('burned'); // Mark the card as burned so it's not targeted again
                
                // After the poster has "burned", remove it and replace with a new one
                setTimeout(function () {
                    replaceMovie(movieElement);
                    movieElement.classList.remove('flame', 'remove');
                }, 1000); // Corresponds with the duration of the burnAndFade animation
            }, 3000); // This duration should match the length of your flame GIF or CSS animation
        }
    
        function replaceMovie(movieElement) {
            // Logic to load a new movie poster goes here
            // For example, setting new src for the img tag and updating the movie title
            movieElement.querySelector('img').src = 'new_path_to_movie_poster.jpg';
            movieElement.querySelector('.movie-title').textContent = 'New Movie Title';
            movieElement.classList.remove('burned'); // Remove the burned class to reset the card
        }
    
    // Function to animate and remove movie poster
    function removeMovie(movieElement, direction) {
        movieElement.classList.add('flame');
        // Add flames and removal animation
        // Replace with next movie poster after animation
    }

    setTimeout(function () {
        movieElement.classList.add('remove');

          // After the poster has "burned", remove it and replace with a new one
          setTimeout(function () {
            replaceMovie(movieElement);
            movieElement.classList.remove('flame', 'remove');
        }, 1000); // Corresponds with the duration of the burnAndFade animation
    }, 3000); 
    
    function replaceMovie(movieElement) {
        // Logic to load a new movie poster goes here
        // For example, setting new src for the img tag and updating the movie title
        movieElement.querySelector('img').src = 'new_path_to_movie_poster.jpg';
        movieElement.querySelector('.movie-title').textContent = 'New Movie Title';
     //This duration should match the length of your flame GIF or CSS animation//
}

    // Hammer.js swipe event listeners for both movie cards
    var hammerLeft = new Hammer(leftMovie);
    hammerLeft.on('swipe', function (ev) {
        if (ev.direction === Hammer.DIRECTION_LEFT) { // Swipe left to hate
            removeMovie(leftMovie, 'left');
        }
    });

    var hammerRight = new Hammer(rightMovie);
    hammerRight.on('swipe', function (ev) {
        if (ev.direction === Hammer.DIRECTION_RIGHT) { // Swipe right to hate
            removeMovie(rightMovie, 'right');
        }
    });

    // Keyboard event listeners for hating left or right movie
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            removeMovie(leftMovie, 'left');
            event.preventDefault();
        } else if (event.key === 'ArrowRight') {
            removeMovie(rightMovie, 'right');
            event.preventDefault();
        }
    });

    // Click event listeners for hating left or right movie
    document.getElementById('hateLeft').addEventListener('click', function() {
        removeMovie(leftMovie, 'left');
    });

    document.getElementById('hateRight').addEventListener('click', function() {
        removeMovie(rightMovie, 'right');
    });
});