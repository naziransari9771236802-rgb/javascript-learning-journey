/* =========================================================
   EVENTHUB - MAIN APP
   ========================================================= */


/* =========================================================
   APP INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeApp();

    }
);


/* =========================================================
   INITIALIZE APP
   ========================================================= */

function initializeApp() {

    setupMobileMenu();

    setupHeaderScroll();

    setupUserInterface();

    setupLogoutButtons();

    setupGlobalFavoriteButtons();

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const menuButton =
        document.querySelector(
            ".mobile-menu-btn"
        );

    const navigation =
        document.querySelector(
            ".main-nav"
        );


    if (!menuButton || !navigation) {
        return;
    }


    menuButton.addEventListener(
        "click",
        () => {

            navigation.classList.toggle(
                "mobile-open"
            );

            menuButton.classList.toggle(
                "active"
            );

        }
    );


    const navLinks =
        navigation.querySelectorAll(
            "a"
        );


    navLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "mobile-open"
                    );

                    menuButton.classList.remove(
                        "active"
                    );

                }
            );

        }
    );

}


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

function setupHeaderScroll() {

    const header =
        document.querySelector(
            ".site-header"
        );


    if (!header) {
        return;
    }


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 30) {

                header.classList.add(
                    "header-scrolled"
                );

            } else {

                header.classList.remove(
                    "header-scrolled"
                );

            }

        }
    );

}


/* =========================================================
   USER INTERFACE
   ========================================================= */

function setupUserInterface() {

    const user =
        typeof getUser === "function"
            ? getUser()
            : null;


    const loginLinks =
        document.querySelectorAll(
            "[data-login-link]"
        );


    const profileLinks =
        document.querySelectorAll(
            "[data-profile-link]"
        );


    const userNames =
        document.querySelectorAll(
            "[data-user-name]"
        );


    if (user) {

        loginLinks.forEach(
            link => {

                link.textContent =
                    "Profile";

                link.href =
                    "profile.html";

            }
        );


        profileLinks.forEach(
            link => {

                link.style.display =
                    "";

            }
        );


        userNames.forEach(
            element => {

                element.textContent =
                    user.name || "User";

            }
        );

    }

}


/* =========================================================
   LOGOUT BUTTONS
   ========================================================= */

function setupLogoutButtons() {

    const logoutButtons =
        document.querySelectorAll(
            "[data-logout]"
        );


    logoutButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    const confirmed =
                        confirm(
                            "Are you sure you want to logout?"
                        );


                    if (!confirmed) {
                        return;
                    }


                    if (
                        typeof removeUser ===
                        "function"
                    ) {

                        removeUser();

                    }


                    showToast(
                        "Logged out successfully!"
                    );


                    setTimeout(
                        () => {

                            window.location.href =
                                "index.html";

                        },
                        800
                    );

                }
            );

        }
    );

}


/* =========================================================
   GLOBAL FAVORITE BUTTONS
   ========================================================= */

function setupGlobalFavoriteButtons() {

    document.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-favorite-id]"
                );


            if (!button) {
                return;
            }


            event.preventDefault();


            const eventId =
                Number(
                    button.dataset.favoriteId
                );


            if (
                typeof isFavorite !==
                "function"
            ) {
                return;
            }


            if (
                isFavorite(eventId)
            ) {

                removeFavorite(
                    eventId
                );


                button.classList.remove(
                    "active"
                );


                button.textContent =
                    "♡";


                showToast(
                    "Removed from favorites."
                );

            } else {

                addFavorite(
                    eventId
                );


                button.classList.add(
                    "active"
                );


                button.textContent =
                    "♥";


                showToast(
                    "Event added to favorites."
                );

            }

        }
    );

}


/* =========================================================
   BACK BUTTON
   ========================================================= */

function setupBackButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-back]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    window.history.back();

                }
            );

        }
    );

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            const navigation =
                document.querySelector(
                    ".main-nav"
                );


            const menuButton =
                document.querySelector(
                    ".mobile-menu-btn"
                );


            if (navigation) {

                navigation.classList.remove(
                    "mobile-open"
                );

            }


            if (menuButton) {

                menuButton.classList.remove(
                    "active"
                );

            }

        }

    }
);


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.initializeApp =
    initializeApp;

window.setupMobileMenu =
    setupMobileMenu;

window.setupHeaderScroll =
    setupHeaderScroll;

window.setupUserInterface =
    setupUserInterface;

window.setupLogoutButtons =
    setupLogoutButtons;

window.setupBackButtons =
    setupBackButtons;