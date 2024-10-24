// CLASSES

class Nav {
    constructor(burgerID, navLinksID) {
        this.burger = document.getElementById(burgerID);
        this.navLinks = document.getElementById(navLinksID);
        this.initFunctions();
    }

    initFunctions() {
        this.burger.addEventListener('click', () => this.toggleNavs());
        document.addEventListener('click', (event) => this.clickOutside(event));
    }

    toggleNavs() {
        if (this.burger.classList.contains('active')) {
            this.burger.classList.remove('active');
            this.navLinks.classList.remove('show');
        } else {
            this.burger.classList.add('active');
            this.navLinks.classList.add('show')
        }
    }

    clickOutside(event) {
        if (!this.burger.contains(event.target) && !this.navLinks.contains(event.target)) {
            if (this.navLinks.classList.contains('show')) {
                this.navLinks.classList.remove('show');
                this.burger.classList.remove('active');
            }
        }
    }
}

const nav = new Nav('burger', 'nav-buttons');

class ProfileShow {
    constructor(profileID, loginRegisterID, SVGclick, loginState) {
        this.profile = document.getElementById(profileID);
        this.loginRegister = document.getElementById(loginRegisterID);
        this.accSVG = document.getElementById(SVGclick);
        this.state = loginState;
        this.initFunc();
    }

    initFunc() {
        this.accSVG.addEventListener('click', () => this.showDIV());
    }

    showDIV() {
        console.log('showDIV called');
        console.log('Current state:', this.state);
        if (this.state) {
            this.profile.classList.toggle('show');
            console.log('Toggled profile:', this.profile.classList);
        } else {
            this.loginRegister.classList.toggle('show');
            console.log('Toggled loginRegister:', this.loginRegister.classList);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let profileState;
    profileState = new ProfileShow('profile', 'login-register', 'acc-svg', true);
});

