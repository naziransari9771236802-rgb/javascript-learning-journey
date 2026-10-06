// =====================================================
// JOBFINDER - AUTHENTICATION
// LOGIN / REGISTER
// =====================================================


// =====================================================
// REGISTER
// =====================================================

const registerForm =
    document.getElementById(
        "registerForm"
    );


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "registerName"
                ).value.trim();


            const email =
                document.getElementById(
                    "registerEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            const terms =
                document.getElementById(
                    "terms"
                );


            // PASSWORD CHECK

            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            // PASSWORD MATCH

            if (
                password !==
                confirmPassword
            ) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            // TERMS

            if (
                terms &&
                !terms.checked
            ) {

                alert(
                    "Please accept the Terms & Conditions."
                );

                return;

            }


            // SAVE USER

            const user = {

                name:
                    name,

                email:
                    email,

                password:
                    password

            };


            localStorage.setItem(
                "jobFinderUser",
                JSON.stringify(user)
            );


            // ALSO CREATE PROFILE

            localStorage.setItem(
                "jobFinderProfile",
                JSON.stringify({

                    name: name,

                    email: email,

                    phone: "",

                    location: "",

                    bio: "",

                    skills: []

                })
            );


            alert(
                "Account created successfully! 🎉"
            );


            window.location.href =
                "login.html";

        }
    );

}


// =====================================================
// LOGIN
// =====================================================

const loginForm =
    document.getElementById(
        "loginForm"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const storedUser =
                JSON.parse(
                    localStorage.getItem(
                        "jobFinderUser"
                    )
                );


            if (!storedUser) {

                alert(
                    "No account found. Please register first."
                );

                return;

            }


            if (
                email !== storedUser.email ||
                password !== storedUser.password
            ) {

                alert(
                    "Invalid email or password."
                );

                return;

            }


            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            alert(
                `Welcome back, ${storedUser.name}! 👋`
            );


            window.location.href =
                "dashboard.html";

        }
    );

}