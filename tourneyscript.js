document.addEventListener('DOMContentLoaded', function () {
    var leftMovie = document.getElementById('movieLeft');
    var rightMovie = document.getElementById('movieRight');

    // This function ensures we're always getting the top card
    function getTopCard(stackId) {
        const stack = document.getElementById(stackId);
        const allCards = stack.querySelectorAll('.movie-card:not(.burned)');
        return allCards[allCards.length - 1]; // The last card in the array is the topmost one
    }

    // Modified removeMovie function
function removeMovie(stackId) {
    const movieElement = getTopCard(stackId);

    if (!movieElement) return;

    // Apply the confetti effect and removal logic
    const confettiContainer = document.getElementById('confettiContainer');
    const confetti = new ConfettiGenerator({ target: confettiContainer });
    confetti.render();

    // Explode the card
    movieElement.classList.add('explode');

    // Replace the movie with the next one in the stack
    setTimeout(function () {
        movieElement.classList.add('burned');
        replaceMovie(movieElement);
        confetti.clear();
    }, 1000);
}

// Event listeners for each stack
document.getElementById('leftMovieStack').addEventListener('click', function() {
    removeMovie('rightMovieStack');
});

document.getElementById('rightMovieStack').addEventListener('click', function() {
    removeMovie('leftMovieStack');
});


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
    // Optional: Add event listener for keydown events for the arrow keys
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            removeMovie('right');
        } else if (event.key === 'ArrowRight') {
            removeMovie('left');
        }
    });

// Example of setting up Hammer.js on a movie card
var leftStack = document.getElementById('leftMovieStack');
Array.from(leftStack.getElementsByClassName('movie-card')).forEach(function(card) {
    var hammer = new Hammer(card);
    hammer.on('swipe', function(ev) {
        // Handle swipe logic
        if (ev.direction === Hammer.DIRECTION_LEFT) {
            removeMovie('rightMovieStack');
        }
    });
});
