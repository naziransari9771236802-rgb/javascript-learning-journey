/* =========================================================
   EVENTHUB - PROFILE PAGE
   ========================================================= */


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeProfilePage();

    }
);


/* =========================================================
   INITIALIZE PROFILE PAGE
   ========================================================= */

function initializeProfilePage() {

    loadProfileData();

    setupProfileForm();

    setupProfileStats();

}


/* =========================================================
   LOAD PROFILE DATA
   ========================================================= */

function loadProfileData() {

    const user =
        getUser();


    if (!user) {

        showProfileLoginMessage();

        return;

    }


    const nameElements =
        document.querySelectorAll(
            "[data-profile-name]"
        );


    const emailElements =
        document.querySelectorAll(
            "[data-profile-email]"
        );


    const phoneElements =
        document.querySelectorAll(
            "[data-profile-phone]"
        );


    nameElements.forEach(
        element => {

            element.textContent =
                user.name || "User";

        }
    );


    emailElements.forEach(
        element => {

            element.textContent =
                user.email || "Not provided";

        }
    );


    phoneElements.forEach(
        element => {

            element.textContent =
                user.phone || "Not provided";

        }
    );


    const nameInput =
        document.querySelector(
            "[name='name']"
        );


    const emailInput =
        document.querySelector(
            "[name='email']"
        );


    const phoneInput =
        document.querySelector(
            "[name='phone']"
        );


    if (nameInput) {

        nameInput.value =
            user.name || "";

    }


    if (emailInput) {

        emailInput.value =
            user.email || "";

    }


    if (phoneInput) {

        phoneInput.value =
            user.phone || "";

    }

}


/* =========================================================
   PROFILE FORM
   ========================================================= */

function setupProfileForm() {

    const form =
        document.querySelector(
            "[data-profile-form]"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const currentUser =
                getUser();


            if (!currentUser) {

                showProfileLoginMessage();

                return;

            }


            const nameInput =
                form.querySelector(
                    "[name='name']"
                );


            const emailInput =
                form.querySelector(
                    "[name='email']"
                );


            const phoneInput =
                form.querySelector(
                    "[name='phone']"
                );


            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";


            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";


            const phone =
                phoneInput
                    ? phoneInput.value.trim()
                    : "";


            if (!name) {

                showToast(
                    "Please enter your name.",
                    "error"
                );

                return;

            }


            if (
                !isValidEmail(email)
            ) {

                showToast(
                    "Please enter a valid email.",
                    "error"
                );

                return;

            }


            const updatedUser = {

                ...currentUser,

                name: name,

                email: email,

                phone: phone

            };


            saveUser(
                updatedUser
            );


            loadProfileData();


            showToast(
                "Profile updated successfully!"
            );

        }
    );

}


/* =========================================================
   PROFILE STATS
   ========================================================= */

function setupProfileStats() {

    const bookings =
        getBookings();


    const favorites =
        getFavorites();


    const bookingCount =
        document.querySelector(
            "[data-profile-bookings]"
        );


    const favoriteCount =
        document.querySelector(
            "[data-profile-favorites]"
        );


    if (bookingCount) {

        bookingCount.textContent =
            bookings.length;

    }


    if (favoriteCount) {

        favoriteCount.textContent =
            favorites.length;

    }

}


/* =========================================================
   LOGIN MESSAGE
   ========================================================= */

function showProfileLoginMessage() {

    const container =
        document.querySelector(
            "[data-profile-container]"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                👤
            </div>

            <h2>
                Login Required
            </h2>

            <p>
                Please login to view your profile.
            </p>

            <a
                href="login.html"
                class="btn btn-primary"
            >
                Login
            </a>

        </div>

    `;

}


/* =========================================================
   PROFILE AVATAR
   ========================================================= */

function updateProfileAvatar() {

    const user =
        getUser();


    const avatarElements =
        document.querySelectorAll(
            "[data-profile-avatar]"
        );


    if (!user) {
        return;
    }


    const firstLetter =
        user.name
            ? user.name
                .charAt(0)
                .toUpperCase()
            : "U";


    avatarElements.forEach(
        element => {

            element.textContent =
                firstLetter;

        }
    );

}


/* =========================================================
   INITIALIZE AVATAR
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateProfileAvatar();

    }
);


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.initializeProfilePage =
    initializeProfilePage;

window.loadProfileData =
    loadProfileData;

window.setupProfileForm =
    setupProfileForm;

window.setupProfileStats =
    setupProfileStats;

window.updateProfileAvatar =
    updateProfileAvatar;