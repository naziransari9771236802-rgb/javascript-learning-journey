// =====================================================
// JOBFINDER - JOB DETAILS
// =====================================================


// ================= GET JOB ID =================

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const jobId =
    Number(
        urlParams.get("id")
    );


// ================= GET JOB =================

const currentJob =
    getJobById(jobId);


// ================= ELEMENTS =================

const saveDetailsBtn =
    document.getElementById(
        "saveDetailsBtn"
    );

const applyBtn =
    document.getElementById(
        "applyBtn"
    );


// =====================================================
// LOAD JOB DETAILS
// =====================================================

function loadJobDetails() {

    if (!currentJob) {

        console.error(
            "Job not found."
        );

        return;

    }


    const title =
        document.querySelector(
            ".details-header-info h1"
        );


    const company =
        document.querySelector(
            ".company-name"
        );


    const logo =
        document.querySelector(
            ".details-company-logo"
        );


    if (title) {

        title.textContent =
            currentJob.title;

    }


    if (company) {

        company.textContent =
            currentJob.company;

    }


    if (logo) {

        logo.textContent =
            currentJob.logo;

    }


    const meta =
        document.querySelector(
            ".details-meta"
        );


    if (meta) {

        meta.innerHTML = `

            <span>
                📍 ${currentJob.location}
            </span>

            <span>
                💼 ${currentJob.type}
            </span>

            <span>
                🌐 ${currentJob.mode}
            </span>

            <span>
                🧑‍💻 ${currentJob.experience}
            </span>

        `;

    }


    const about =
        document.querySelector(
            ".details-main .details-card p"
        );


    if (about) {

        about.textContent =
            currentJob.description;

    }


    const skillsContainer =
        document.querySelector(
            ".skill-tags"
        );


    if (skillsContainer) {

        skillsContainer.innerHTML = "";


        currentJob.skills.forEach(
            function (skill) {

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
        );

    }


    const salary =
        document.querySelector(
            ".apply-card strong"
        );


    if (salary) {

        salary.textContent =
            currentJob.salaryText;

    }


    updateSaveButton();

}


// =====================================================
// SAVE BUTTON
// =====================================================

function updateSaveButton() {

    if (!saveDetailsBtn) return;


    const saved =
        isJobSaved(
            currentJob.id
        );


    if (saved) {

        saveDetailsBtn.textContent =
            "♥ Saved";

        saveDetailsBtn.classList.add(
            "saved"
        );

    } else {

        saveDetailsBtn.textContent =
            "♡ Save";

        saveDetailsBtn.classList.remove(
            "saved"
        );

    }

}


if (saveDetailsBtn) {

    saveDetailsBtn.addEventListener(
        "click",
        function () {

            toggleSavedJob(
                currentJob.id
            );

            updateSaveButton();

        }
    );

}


// =====================================================
// APPLY BUTTON
// =====================================================

if (applyBtn) {

    applyBtn.addEventListener(
        "click",
        function () {

            if (!currentJob) return;


            let applications =
                JSON.parse(
                    localStorage.getItem(
                        "applications"
                    )
                ) || [];


            const alreadyApplied =
                applications.some(
                    function (application) {

                        return application.id ===
                            currentJob.id;

                    }
                );


            if (alreadyApplied) {

                alert(
                    "You have already applied for this job."
                );

                return;

            }


            applications.push({

                id: currentJob.id,

                title: currentJob.title,

                company: currentJob.company,

                salary: currentJob.salaryText,

                status: "Applied"

            });


            localStorage.setItem(
                "applications",
                JSON.stringify(
                    applications
                )
            );


            alert(
                "Application submitted successfully! 🎉"
            );

        }
    );

}


// =====================================================
// INITIAL LOAD
// =====================================================

if (currentJob) {

    loadJobDetails();

}