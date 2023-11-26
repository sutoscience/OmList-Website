
document.addEventListener('DOMContentLoaded', function () {
    var leftMovie = document.getElementById('movieLeft');
    var rightMovie = document.getElementById('movieRight');
    
    // Function to replace movie poster with a new one
    function replaceMovie(movieElement) {
        // Logic to replace the movie poster goes here
    }

    // Function to animate and remove movie poster
    function removeMovie(movieElement, direction) {
        // Add flames and removal animation
        // Replace with next movie poster after animation
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
