// =====================================================
// JOBFINDER - PROFILE
// =====================================================


// ================= ELEMENTS =================

const profileForm =
    document.getElementById(
        "profileForm"
    );


const profileName =
    document.getElementById(
        "profileName"
    );


const profileEmail =
    document.getElementById(
        "profileEmail"
    );


const profilePhone =
    document.getElementById(
        "profilePhone"
    );


const profileLocation =
    document.getElementById(
        "profileLocation"
    );


const profileBio =
    document.getElementById(
        "profileBio"
    );


const skillInput =
    document.getElementById(
        "skillInput"
    );


const addSkillBtn =
    document.getElementById(
        "addSkillBtn"
    );


const skillsContainer =
    document.getElementById(
        "skillsContainer"
    );


// =====================================================
// LOAD PROFILE
// =====================================================

function loadProfile() {

    const profile =
        JSON.parse(
            localStorage.getItem(
                "jobFinderProfile"
            )
        );


    if (!profile) return;


    if (profileName)
        profileName.value =
            profile.name || "";


    if (profileEmail)
        profileEmail.value =
            profile.email || "";


    if (profilePhone)
        profilePhone.value =
            profile.phone || "";


    if (profileLocation)
        profileLocation.value =
            profile.location || "";


    if (profileBio)
        profileBio.value =
            profile.bio || "";


    if (profile.skills) {

        skillsContainer.innerHTML =
            "";


        profile.skills.forEach(
            function (skill) {

                addSkillToPage(
                    skill
                );

            }
        );

    }

}


// =====================================================
// SAVE PROFILE
// =====================================================

if (profileForm) {

    profileForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const skills =
                Array.from(
                    skillsContainer.querySelectorAll(
                        "span"
                    )
                ).map(
                    function (span) {

                        return span.textContent;

                    }
                );


            const profile = {

                name:
                    profileName.value.trim(),

                email:
                    profileEmail.value.trim(),

                phone:
                    profilePhone.value.trim(),

                location:
                    profileLocation.value.trim(),

                bio:
                    profileBio.value.trim(),

                skills:
                    skills

            };


            localStorage.setItem(
                "jobFinderProfile",
                JSON.stringify(profile)
            );


            alert(
                "Profile saved successfully! ✅"
            );

        }
    );

}


// =====================================================
// ADD SKILL
// =====================================================

function addSkillToPage(skill) {

    if (!skillsContainer) return;


    const span =
        document.createElement(
            "span"
        );


    span.textContent =
        skill;


    skillsContainer.appendChild(
        span
    );

}


if (addSkillBtn) {

    addSkillBtn.addEventListener(
        "click",
        function () {

            const skill =
                skillInput.value.trim();


            if (skill === "") {

                return;

            }


            addSkillToPage(
                skill
            );


            skillInput.value =
                "";

        }
    );

}


// =====================================================
// ENTER KEY FOR SKILL
// =====================================================

if (skillInput) {

    skillInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                addSkillBtn.click();

            }

        }
    );

}


// =====================================================
// INITIAL LOAD
// =====================================================

loadProfile();