document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav-buttons ul li a');
    const accSvg = document.querySelector('.acc-svg');
    const profile = document.querySelector('.profile');
    const loginRegister = document.querySelector('.login-register');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    let isLoggedIn = true;

    accSvg.addEventListener('click', () => {
        if (isLoggedIn) {
            profile.classList.toggle('show');
        } else {
            loginRegister.classList.toggle('show');
        }
    });

    profile.classList.remove('show');
    loginRegister.classList.remove('show');

    const burger = document.querySelector('.burger');

    const navButtons = document.getElementById('nav-buttons');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navButtons.classList.toggle('show');
    });
});
