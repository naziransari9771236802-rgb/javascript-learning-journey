// =====================================================
// JOBFINDER - DASHBOARD
// =====================================================


// ================= ELEMENTS =================

const applicationsCount =
    document.getElementById(
        "applicationsCount"
    );


const savedCount =
    document.getElementById(
        "savedCount"
    );


const interviewCount =
    document.getElementById(
        "interviewCount"
    );


const applicationsContainer =
    document.getElementById(
        "applicationsContainer"
    );


// =====================================================
// GET APPLICATIONS
// =====================================================

function getApplications() {

    return JSON.parse(
        localStorage.getItem(
            "applications"
        )
    ) || [];

}


// =====================================================
// UPDATE STATS
// =====================================================

function updateDashboardStats() {

    const applications =
        getApplications();


    const savedJobs =
        getSavedJobs();


    if (applicationsCount) {

        applicationsCount.textContent =
            applications.length;

    }


    if (savedCount) {

        savedCount.textContent =
            savedJobs.length;

    }


    if (interviewCount) {

        const interviews =
            applications.filter(
                function (application) {

                    return application.status ===
                        "Interview";

                }
            );


        interviewCount.textContent =
            interviews.length;

    }

}


// =====================================================
// DISPLAY APPLICATIONS
// =====================================================

function displayApplications() {

    if (!applicationsContainer)
        return;


    const applications =
        getApplications();


    if (applications.length === 0) {

        return;

    }


    applicationsContainer.innerHTML =
        "";


    applications.forEach(
        function (application) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "application-item";


            item.innerHTML = `

                <div>

                    <strong>
                        ${application.title}
                    </strong>

                    <p>
                        ${application.company}
                    </p>

                </div>


                <span>
                    ${application.status}
                </span>

            `;


            applicationsContainer.appendChild(
                item
            );

        }
    );

}


// =====================================================
// INITIAL LOAD
// =====================================================

updateDashboardStats();

displayApplications();