document.addEventListener('DOMContentLoaded', function () {
    var leftMovie = document.getElementById('movieLeft');
    var rightMovie = document.getElementById('movieRight');

    // This function ensures we're always getting the top card
    function getTopCard() {
        const allCards = document.querySelectorAll('.movie-card:not(.burned)');
        return allCards[allCards.length - 1]; // The last card in the array is the topmost one
    }

    // Function to remove and replace movie poster
    function removeMovie(nonSelectedSide) {
        const movieElement = getTopCard(); // Always get the top card

        if (!movieElement) return; // If there's no card, don't do anything

        // Logic to apply the confetti effect to the non-selected poster
        // ...

        // Wait for the animation to finish before removing the movie poster
        setTimeout(function () {
            movieElement.classList.add('remove');
            movieElement.classList.add('burned'); // Mark the card as burned so it's not targeted again
    
            replaceMovie(movieElement);
        }, 500); 
    }

    function replaceMovie(movieElement) {
        // Logic to load a new movie poster
        movieElement.querySelector('img').src = 'new_path_to_movie_poster.jpg';
        movieElement.querySelector('.movie-title').textContent = 'New Movie Title';
        movieElement.classList.remove('burned'); // Remove the burned class to reset the card
    }

    // Event listeners for click events on movie posters
    leftMovie.addEventListener('click', function() {
        removeMovie('right'); // Remove the right movie
    });

    rightMovie.addEventListener('click', function() {
        removeMovie('left'); // Remove the left movie
    });

    // Optional: Add event listener for keydown events for the arrow keys
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            removeMovie('right');
        } else if (event.key === 'ArrowRight') {
            removeMovie('left');
        }
    });
});
