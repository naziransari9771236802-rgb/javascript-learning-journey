// =====================================================
// JOBFINDER - SAVED JOBS
// =====================================================


const savedJobsContainer =
    document.getElementById(
        "savedJobsContainer"
    );


const noSavedJobs =
    document.getElementById(
        "noSavedJobs"
    );


// =====================================================
// DISPLAY SAVED JOBS
// =====================================================

function displaySavedJobs() {

    if (!savedJobsContainer) return;


    const savedIds =
        getSavedJobs();


    const savedJobs =
        jobsData.filter(
            function (job) {

                return savedIds.includes(
                    job.id
                );

            }
        );


    savedJobsContainer.innerHTML =
        "";


    if (savedJobs.length === 0) {

        if (noSavedJobs) {

            noSavedJobs.hidden = false;

        }

        return;

    }


    if (noSavedJobs) {

        noSavedJobs.hidden = true;

    }


    savedJobs.forEach(
        function (job) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "job-item";


            card.innerHTML = `

                <div class="job-company-logo">
                    ${job.logo}
                </div>


                <div class="job-item-info">

                    <h3>
                        ${job.title}
                    </h3>

                    <p class="job-company">
                        ${job.company}
                    </p>


                    <div class="job-meta">

                        <span>
                            📍 ${job.location}
                        </span>

                        <span>
                            💼 ${job.type}
                        </span>

                        <span>
                            ${job.mode}
                        </span>

                    </div>

                </div>


                <div class="job-item-action">

                    <strong class="job-salary">
                        ${job.salaryText}
                    </strong>


                    <button
                        class="job-save-btn saved"
                        data-id="${job.id}"
                    >
                        ♥
                    </button>


                    <a
                        href="job-details.html?id=${job.id}"
                        class="job-view-btn"
                    >
                        View Job →
                    </a>

                </div>

            `;


            savedJobsContainer.appendChild(
                card
            );

        }
    );


    addRemoveEvents();

}


// =====================================================
// REMOVE SAVED JOB
// =====================================================

function addRemoveEvents() {

    const buttons =
        document.querySelectorAll(
            "#savedJobsContainer .job-save-btn"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const jobId =
                        Number(
                            this.dataset.id
                        );


                    toggleSavedJob(
                        jobId
                    );


                    displaySavedJobs();

                }
            );

        }
    );

}


// =====================================================
// INITIAL LOAD
// =====================================================

displaySavedJobs();