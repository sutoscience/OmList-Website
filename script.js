// Log-In Pop-Up Code

window.onload = function () {
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('login-container');
    const overlay = document.getElementById('overlay');
    const navbar = document.getElementById('navbar');

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

// About Page Scroll Bar

window.addEventListener('scroll', function () {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progressBar = document.getElementById('progress-bar');

    const progressHeight = (scrollPosition / scrollHeight) * 100;
    progressBar.style.height = progressHeight + 'vh';
});

// About Page Smooth Scrolling

document.querySelectorAll('#sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('#sidebar a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
        }
    });
});

// About Page - Progress Bar

window.addEventListener('scroll', function () {
    const sidebarHeight = document.getElementById('sidebar').offsetHeight;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const windowScroll = window.scrollY;
    const progressHeight = (windowScroll / windowHeight) * sidebarHeight;

    document.getElementById('progress-bar').style.height = progressHeight + 'px';
});
