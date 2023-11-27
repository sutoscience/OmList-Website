document.addEventListener('DOMContentLoaded', function () {
    function getTopCard(stackId) {
        const stack = document.getElementById(stackId);
        const allCards = stack.querySelectorAll('.movie-card:not(.burned)');
        return allCards[allCards.length - 1];
    }

    function removeMovie(stackId) {
        const movieElement = getTopCard(stackId);
        if (!movieElement) return;

        const confettiContainer = document.getElementById('confettiContainer');
        const confetti = new ConfettiGenerator({ target: confettiContainer });
        confetti.render();

        movieElement.classList.add('explode');

        setTimeout(function () {
            movieElement.classList.add('burned');
            replaceMovie(movieElement);
            confetti.clear();
        }, 1000);
    }

    document.getElementById('leftMovieStack').addEventListener('click', function() {
        removeMovie('rightMovieStack');
    });

    document.getElementById('rightMovieStack').addEventListener('click', function() {
        removeMovie('leftMovieStack');
    });

    function replaceMovie(movieElement) {
        movieElement.querySelector('img').src = 'new_path_to_movie_poster.jpg';
        movieElement.querySelector('.movie-title').textContent = 'New Movie Title';
        movieElement.classList.remove('burned');
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            removeMovie('rightMovieStack');
        } else if (event.key === 'ArrowRight') {
            removeMovie('leftMovieStack');
        }
    });

    var leftStack = document.getElementById('leftMovieStack');
    Array.from(leftStack.getElementsByClassName('movie-card')).forEach(function(card) {
        var hammer = new Hammer(card);
        hammer.on('swipe', function(ev) {
            if (ev.direction === Hammer.DIRECTION_LEFT) {
                removeMovie('rightMovieStack');
            }
        });
    });
});
