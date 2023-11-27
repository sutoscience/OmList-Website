function removeMovie(stackId) {
    console.log('removeMovie called with stackId:', stackId);
    const movieElement = getTopCard(stackId);
    if (!movieElement) return;

    movieElement.classList.add('explode');

    setTimeout(function () {
        movieElement.remove(); // This will remove the movieElement from the DOM
        revealNextCard(stackId); // This will reveal the next card
    }, 1000);
}

function revealNextCard(stackId) {
    const stack = document.getElementById(stackId);
    const nextCard = stack.querySelector('.movie-card:not(.burned)');
    if (nextCard) {
        nextCard.classList.remove('hidden'); // Assuming 'hidden' class hides the card
    }
}

document.getElementById('leftMovieStack').addEventListener('click', function() {
    console.log('leftMovieStack clicked'); // Add this line
    removeMovie('rightMovieStack');
});

document.getElementById('rightMovieStack').addEventListener('click', function() {
    console.log('rightMovieStack clicked'); // Add this line
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


    function getTopCard(stackId) {
        const stack = document.getElementById(stackId);
        return stack.querySelector('.movie-card:not(.burned)');
    }