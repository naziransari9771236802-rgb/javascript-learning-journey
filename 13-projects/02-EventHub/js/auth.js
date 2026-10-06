/* =========================================================
   EVENTHUB - AUTHENTICATION
   ========================================================= */


/* =========================================================
   INITIALIZE AUTH
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeAuth();

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeAuth() {

    setupLoginForm();

    setupRegisterForm();

    setupAuthPasswordToggle();

    redirectLoggedInUser();

}


/* =========================================================
   LOGIN FORM
   ========================================================= */

function setupLoginForm() {

    const form =
        document.querySelector(
            "[data-login-form]"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const emailInput =
                form.querySelector(
                    "[name='email']"
                );


            const passwordInput =
                form.querySelector(
                    "[name='password']"
                );


            const email =
                emailInput
                    ? emailInput.value
                        .trim()
                        .toLowerCase()
                    : "";


            const password =
                passwordInput
                    ? passwordInput.value
                    : "";


            if (!isValidEmail(email)) {

                showToast(
                    "Please enter a valid email.",
                    "error"
                );

                return;

            }


            if (!password) {

                showToast(
                    "Please enter your password.",
                    "error"
                );

                return;

            }


            /*
             * Demo authentication:
             * For this frontend project we store
             * the logged-in user in localStorage.
             */

            const existingUser =
                getUser();


            const user = {

                name:
                    existingUser?.name ||
                    email.split("@")[0],

                email:
                    email,

                phone:
                    existingUser?.phone ||
                    "",

                loggedIn:
                    true,

                loginDate:
                    new Date().toISOString()

            };


            saveUser(user);


            showToast(
                "Login successful!"
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


/* =========================================================
   REGISTER FORM
   ========================================================= */

function setupRegisterForm() {

    const form =
        document.querySelector(
            "[data-register-form]"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


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


            const passwordInput =
                form.querySelector(
                    "[name='password']"
                );


            const confirmPasswordInput =
                form.querySelector(
                    "[name='confirmPassword']"
                );


            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";


            const email =
                emailInput
                    ? emailInput.value
                        .trim()
                        .toLowerCase()
                    : "";


            const phone =
                phoneInput
                    ? phoneInput.value.trim()
                    : "";


            const password =
                passwordInput
                    ? passwordInput.value
                    : "";


            const confirmPassword =
                confirmPasswordInput
                    ? confirmPasswordInput.value
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


            if (
                password.length < 6
            ) {

                showToast(
                    "Password must be at least 6 characters.",
                    "error"
                );

                return;

            }


            if (
                password !==
                confirmPassword
            ) {

                showToast(
                    "Passwords do not match.",
                    "error"
                );

                return;

            }


            const user = {

                name:
                    name,

                email:
                    email,

                phone:
                    phone,

                loggedIn:
                    true,

                registeredAt:
                    new Date().toISOString()

            };


            saveUser(user);


            showToast(
                "Account created successfully!"
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


/* =========================================================
   PASSWORD SHOW / HIDE
   ========================================================= */

function setupAuthPasswordToggle() {

    const toggleButtons =
        document.querySelectorAll(
            "[data-password-toggle]"
        );


    toggleButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const targetSelector =
                        button.dataset.passwordToggle;


                    const input =
                        document.querySelector(
                            targetSelector
                        );


                    if (!input) {
                        return;
                    }


                    if (
                        input.type ===
                        "password"
                    ) {

                        input.type =
                            "text";

                        button.textContent =
                            "Hide";

                    } else {

                        input.type =
                            "password";

                        button.textContent =
                            "Show";

                    }

                }
            );

        }
    );

}


/* =========================================================
   CHECK LOGIN
   ========================================================= */

function isLoggedIn() {

    const user =
        getUser();


    return Boolean(
        user &&
        user.loggedIn
    );

}


/* =========================================================
   REDIRECT LOGGED-IN USER
   ========================================================= */

function redirectLoggedInUser() {

    const user =
        getUser();


    if (!user) {
        return;
    }


    /*
     * Login/register pages can optionally
     * use this attribute if they should
     * redirect an already logged-in user.
     */

    const authPage =
        document.querySelector(
            "[data-auth-page]"
        );


    if (
        authPage &&
        user.loggedIn
    ) {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop();


        if (
            currentPage ===
            "login.html"
            ||
            currentPage ===
            "register.html"
        ) {

            /*
             * Keep the user on the page if
             * the form is currently being used.
             * This can be changed later if needed.
             */

        }

    }

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logoutUser() {

    removeUser();


    showToast(
        "You have been logged out."
    );


    setTimeout(
        () => {

            window.location.href =
                "index.html";

        },
        700
    );

}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.initializeAuth =
    initializeAuth;

window.setupLoginForm =
    setupLoginForm;

window.setupRegisterForm =
    setupRegisterForm;

window.setupAuthPasswordToggle =
    setupAuthPasswordToggle;

window.isLoggedIn =
    isLoggedIn;

window.logoutUser =
    logoutUser;