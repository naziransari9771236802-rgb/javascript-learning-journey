/* =====================================================
   SHOPEASE AUTH
===================================================== */


const loginForm =
    document.querySelector(
        "#loginForm"
    );


const registerForm =
    document.querySelector(
        "#registerForm"
    );


const switchAuth =
    document.querySelector(
        "#switchAuth"
    );


const switchText =
    document.querySelector(
        "#switchText"
    );


const authTitle =
    document.querySelector(
        "#authTitle"
    );


const authSubtitle =
    document.querySelector(
        "#authSubtitle"
    );


const userPanel =
    document.querySelector(
        "#userPanel"
    );


let isLoginMode = true;


/* =====================================================
   GET USERS
===================================================== */

function getUsers() {

    return (
        JSON.parse(
            localStorage.getItem(
                "shopEaseUsers"
            )
        ) || []
    );

}


/* =====================================================
   SAVE USERS
===================================================== */

function saveUsers(users) {

    localStorage.setItem(
        "shopEaseUsers",
        JSON.stringify(users)
    );

}


/* =====================================================
   SWITCH LOGIN / REGISTER
===================================================== */

switchAuth.addEventListener(
    "click",
    function () {

        isLoginMode =
            !isLoginMode;


        if (isLoginMode) {

            loginForm.classList.remove(
                "hidden"
            );

            registerForm.classList.add(
                "hidden"
            );

            authTitle.textContent =
                "Login";

            authSubtitle.textContent =
                "Login to manage your account and orders.";

            switchText.textContent =
                "Don't have an account?";

            switchAuth.textContent =
                "Create Account";

        }

        else {

            loginForm.classList.add(
                "hidden"
            );

            registerForm.classList.remove(
                "hidden"
            );

            authTitle.textContent =
                "Create Account";

            authSubtitle.textContent =
                "Create your ShopEase account.";

            switchText.textContent =
                "Already have an account?";

            switchAuth.textContent =
                "Login";

        }

    }
);


/* =====================================================
   REGISTER
===================================================== */

registerForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.querySelector(
                "#registerName"
            ).value.trim();


        const email =
            document.querySelector(
                "#registerEmail"
            ).value.trim()
            .toLowerCase();


        const password =
            document.querySelector(
                "#registerPassword"
            ).value;


        const users =
            getUsers();


        const existingUser =
            users.find(
                function (user) {

                    return user.email ===
                        email;

                }
            );


        if (existingUser) {

            alert(
                "This email is already registered."
            );

            return;

        }


        users.push({

            id:
                Date.now(),

            name,

            email,

            password

        });


        saveUsers(users);


        alert(
            "Account created successfully! 🎉"
        );


        isLoginMode = false;

        switchAuth.click();

    }
);


/* =====================================================
   LOGIN
===================================================== */

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document.querySelector(
                "#loginEmail"
            ).value.trim()
            .toLowerCase();


        const password =
            document.querySelector(
                "#loginPassword"
            ).value;


        const users =
            getUsers();


        const user =
            users.find(
                function (item) {

                    return (
                        item.email === email &&
                        item.password === password
                    );

                }
            );


        if (!user) {

            alert(
                "Invalid email or password."
            );

            return;

        }


        localStorage.setItem(

            "shopEaseCurrentUser",

            JSON.stringify(user)

        );


        alert(
            `Welcome back, ${user.name}! 👋`
        );


        showUserPanel();

    }
);


/* =====================================================
   SHOW USER
===================================================== */

function showUserPanel() {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "shopEaseCurrentUser"
            )
        );


    if (!currentUser) {
        return;
    }


    loginForm.classList.add(
        "hidden"
    );

    registerForm.classList.add(
        "hidden"
    );


    authTitle.textContent =
        `Welcome, ${currentUser.name}`;


    authSubtitle.textContent =
        currentUser.email;


    userPanel.classList.remove(
        "hidden"
    );


    userPanel.innerHTML = `

        <div class="logged-user">

            <div class="user-avatar">

                ${currentUser.name
                    .charAt(0)
                    .toUpperCase()}

            </div>


            <h2>
                ${currentUser.name}
            </h2>


            <p>
                ${currentUser.email}
            </p>


            <div class="account-actions">

                <a
                    href="orders.html"
                    class="btn btn-primary"
                >
                    My Orders
                </a>


                <button
                    class="btn btn-secondary"
                    onclick="logout()"
                >
                    Logout
                </button>

            </div>

        </div>

    `;

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    localStorage.removeItem(
        "shopEaseCurrentUser"
    );


    alert(
        "You have been logged out."
    );


    window.location.reload();

}


/* =====================================================
   CHECK EXISTING LOGIN
===================================================== */

const existingUser =
    localStorage.getItem(
        "shopEaseCurrentUser"
    );


if (existingUser) {

    showUserPanel();

}