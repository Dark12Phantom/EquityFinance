class NavFunctions {
    constructor(burgerMenuID, navListID, profileExpandID, closeNavID, profileIconID, expandAccountID, loginState) {
        this.burger = document.getElementById(burgerMenuID);
        this.navList = document.getElementById(navListID);
        this.profileExpand = document.getElementById(profileExpandID);
        this.closeNav = document.getElementById(closeNavID);
        this.profileIcon = document.getElementById(profileIconID);
        this.expandAccount = document.getElementById(expandAccountID);
        this.loginState = loginState;

        this.initFunctions();
    }

    initFunctions() {
        this.burger.addEventListener('click', this.addActive.bind(this));
        this.profileIcon.addEventListener('click', this.profileActive.bind(this));
        this.profileExpand.addEventListener('click', this.profileActive.bind(this));
        this.navList.classList.remove('active');
        this.expandAccount.classList.remove('active');
    }

    addActive() {
        if (this.navList.classList.contains('active')) {
            this.navList.classList.remove('active');
        } else {
            this.navList.classList.add('active');
        }
    }

    profileActive() {
        if (this.expandAccount.classList.contains('active')) {
            this.expandAccount.classList.remove('active');
        } else {
            this.expandAccount.classList.add('active');
        }
    }
}


class SwitchHandler {
    constructor(switchLoginID, switchRegisterID, loginPageID, registerPageID) {
        this.switchLogin = document.getElementById(switchLoginID);
        this.switchRegister = document.getElementById(switchRegisterID);
        this.loginPage = document.getElementById(loginPageID);
        this.registerPage = document.getElementById(registerPageID);

        this.initHandler();
    }

    initHandler() {
        this.switchLogin.addEventListener('click', () => {
            if (this.registerPage.classList.contains('active')) {
                this.registerPage.classList.remove('active');
                this.loginPage.classList.add('active');
            }
        });
        this.switchRegister.addEventListener('click', () => {
            if (this.loginPage.classList.contains('active')) {
                this.loginPage.classList.remove('active');
                this.registerPage.classList.add('active');
            }
        });
    }
}

class CloseButtonHandler {
    constructor(closeButton1ID, closeButton2ID, loginPageID, registerPageID) {
        this.closeButton1 = document.getElementById(closeButton1ID);
        this.closeButton2 = document.getElementById(closeButton2ID);
        this.loginPage = document.getElementById(loginPageID);
        this.registerPage = document.getElementById(registerPageID);

        this.initClose();
    }

    initClose() {
        this.closeButton1.addEventListener('click', () => {
            if (this.registerPage.classList.contains('active')) {
                this.registerPage.classList.remove('active');
            }
        });
        this.closeButton2.addEventListener('click', () => {
            if (this.loginPage.classList.contains('active')) {
                this.loginPage.classList.remove('active');
            }
        });
    }
}


class LoginChecker {
    constructor(unregisteredProfileID, registeredProfileID, accountInfoID, registeredIconID, profileIconID, accountStatus, navFunctions) {
        this.unregisteredProfile = document.getElementById(unregisteredProfileID);
        this.registeredProfile = document.getElementById(registeredProfileID);
        this.accountInfo = document.getElementById(accountInfoID);
        this.registeredIcon = document.getElementById(registeredIconID);
        this.profileIcon = document.getElementById(profileIconID);
        this.accountState = accountStatus;
        this.navFunctions = navFunctions;

        this.initProfileCheck();
        this.isProfileRegistered();
        this.accountInfo.classList.remove('active');
    }

    initProfileCheck() {

        if (this.accountState) {
            this.registeredProfile.classList.add('active');
            this.unregisteredProfile.classList.remove('active');
            this.profileIcon.classList.remove('active');
        } else {
            this.unregisteredProfile.classList.add('active');
            this.registeredProfile.classList.remove('active');
            this.profileIcon.classList.add('active');
        }
        this.registeredIcon.addEventListener('click', this.isProfileRegistered.bind(this));
    }

    isProfileRegistered() {
        if (this.accountInfo.classList.contains('active')) {
            this.accountInfo.classList.remove('active');
        } else {
            this.accountInfo.classList.add('active');
        }
    }
}

class LinkHandler {
    constructor(linkLoginID, linkRegisterID, loginPageID, registerPageID, toLoginID, toRegisterID) {
        this.toLogin = document.getElementById(toLoginID);
        this.toRegister = document.getElementById(toRegisterID);
        this.linkLogin = document.getElementById(linkLoginID);
        this.linkRegister = document.getElementById(linkRegisterID);
        this.loginPage = document.getElementById(loginPageID);
        this.registerPage = document.getElementById(registerPageID);

        this.initLink();
    }

    initLink() {
        this.toLogin.addEventListener('click', () => {
            this.loginPage.classList.add('active');
        });
        this.toRegister.addEventListener('click', () => {
            this.registerPage.classList.add('active');
        });
        this.linkLogin.addEventListener('click', () => {
            this.loginPage.classList.add('active');
        });
        this.linkRegister.addEventListener('click', () => {
            this.registerPage.classList.add('active');
        });
    }
}

const navFunctions = new NavFunctions('burger-menu', 'nav-list', 'click-to-expand', 'close-nav-btn', 'profile-icon', 'login-register-profile');

const switchHandler = new SwitchHandler('switch-login', 'switch-create', 'login-account', 'create-account');

const closeBTNHandler = new CloseButtonHandler('close1', 'close2', 'login-account', 'create-account');

let activeProfileState = true;

function setActiveProfileState(state) {
    activeProfileState = state;
}

document.getElementById('log-out').addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = '../index.html';
    setActiveProfileState(false);
});

const loginState = new LoginChecker('click-to-expand', 'registered-profile', 'account-info', 'registered-icon', 'profile-icon', activeProfileState);

const linkHandler = new LinkHandler('link-login', 'link-create', 'login-account', 'create-account', 'to-login', 'to-register');
