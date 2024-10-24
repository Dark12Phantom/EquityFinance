class ChangePassword {
    constructor(passwordLinkID, changeSectionID, profileSectionID, closeButtonID) {
        this.passwordLink = document.getElementById(passwordLinkID);
        this.changeSection = document.getElementById(changeSectionID);
        this.profileSection = document.getElementById(profileSectionID);
        this.closeButton = document.getElementById(closeButtonID);

        this.initChange();
    }

    initChange() {
        this.passwordLink.addEventListener('click', (event) => {
            event.preventDefault();
            this.showChangeSection();
        });

        this.closeButton.addEventListener('click', () => {
            this.hideChangeSection();
        });
    }

    showChangeSection() {
        this.changeSection.style.display = 'block';
        this.profileSection.classList.add('blur');
    }

    hideChangeSection() {
        this.changeSection.style.display = 'none';
        this.profileSection.classList.remove('blur');
    }
}
const changePassword = new ChangePassword('link-change', 'change-password', 'acc-profile', 'close-btn');