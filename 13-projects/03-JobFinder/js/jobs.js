// =====================================================
// JOBFINDER - JOBS PAGE
// =====================================================


// ================= ELEMENTS =================

const jobsContainer =
    document.getElementById("jobsContainer");

const resultCount =
    document.getElementById("resultCount");

const noJobs =
    document.getElementById("noJobs");


// ================= SEARCH ELEMENTS =================

const searchInput =
    document.getElementById("jobSearch");

const locationInput =
    document.getElementById("locationSearch");


// ================= FILTER ELEMENTS =================

const experienceFilter =
    document.getElementById("experienceFilter");

const jobTypeFilter =
    document.getElementById("jobTypeFilter");

const modeFilter =
    document.getElementById("modeFilter");

const salaryFilter =
    document.getElementById("salaryFilter");

const sortFilter =
    document.getElementById("sortFilter");


// =====================================================
// DISPLAY JOBS
// =====================================================

function displayJobs(jobs) {

    if (!jobsContainer) return;


    jobsContainer.innerHTML = "";


    if (jobs.length === 0) {

        if (noJobs) {

            noJobs.hidden = false;

        }

        if (resultCount) {

            resultCount.textContent =
                "0 jobs found";

        }

        return;

    }


    if (noJobs) {

        noJobs.hidden = true;

    }


    if (resultCount) {

        resultCount.textContent =
            `${jobs.length} jobs found`;

    }


    jobs.forEach(function (job) {

        const jobCard =
            document.createElement("article");


        jobCard.className =
            "job-item";


        const saved =
            isJobSaved(job.id);


        jobCard.innerHTML = `

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

                    <span>
                        ${job.experience}
                    </span>

                </div>

            </div>


            <div class="job-item-action">

                <strong class="job-salary">
                    ${job.salaryText}
                </strong>


                <button
                    class="job-save-btn ${saved ? "saved" : ""}"
                    data-id="${job.id}"
                    title="Save Job"
                >
                    ${saved ? "♥" : "♡"}
                </button>


                <a
                    href="job-details.html?id=${job.id}"
                    class="job-view-btn"
                >
                    View Job →
                </a>

            </div>

        `;


        jobsContainer.appendChild(jobCard);

    });


    addSaveEvents();

}


// =====================================================
// SAVE BUTTON EVENTS
// =====================================================

function addSaveEvents() {

    const saveButtons =
        document.querySelectorAll(
            ".job-save-btn"
        );


    saveButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const jobId =
                    Number(
                        this.dataset.id
                    );


                const saved =
                    toggleSavedJob(jobId);


                if (saved) {

                    this.classList.add(
                        "saved"
                    );

                    this.textContent =
                        "♥";

                } else {

                    this.classList.remove(
                        "saved"
                    );

                    this.textContent =
                        "♡";

                }

            }
        );

    });

}


// =====================================================
// FILTER JOBS
// =====================================================

function filterJobs() {

    let filteredJobs =
        [...jobsData];


    // SEARCH

    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    if (search !== "") {

        filteredJobs =
            filteredJobs.filter(
                function (job) {

                    return (

                        job.title
                            .toLowerCase()
                            .includes(search)

                        ||

                        job.company
                            .toLowerCase()
                            .includes(search)

                        ||

                        job.skills.some(
                            function (skill) {

                                return skill
                                    .toLowerCase()
                                    .includes(search);

                            }
                        )

                    );

                }
            );

    }


    // LOCATION

    const location =
        locationInput
            ? locationInput.value
                .toLowerCase()
                .trim()
            : "";


    if (location !== "") {

        filteredJobs =
            filteredJobs.filter(
                function (job) {

                    return job.location
                        .toLowerCase()
                        .includes(location);

                }
            );

    }


    // EXPERIENCE

    if (
        experienceFilter &&
        experienceFilter.value !== ""
    ) {

        filteredJobs =
            filteredJobs.filter(
                function (job) {

                    return job.experience ===
                        experienceFilter.value;

                }
            );

    }


    // JOB TYPE

    if (
        jobTypeFilter &&
        jobTypeFilter.value !== ""
    ) {

        filteredJobs =
            filteredJobs.filter(
                function (job) {

                    return job.type ===
                        jobTypeFilter.value;

                }
            );

    }


    // MODE

    if (
        modeFilter &&
        modeFilter.value !== ""
    ) {

        filteredJobs =
            filteredJobs.filter(
                function (job) {

                    return job.mode ===
                        modeFilter.value;

                }
            );

    }


    // SALARY

    if (
        salaryFilter &&
        salaryFilter.value !== ""
    ) {

        const minimumSalary =
            Number(
                salaryFilter.value
            );


        filteredJobs =
            filteredJobs.filter(
                function (job) {

                    return job.salaryMax >=
                        minimumSalary;

                }
            );

    }


    // SORT

    if (
        sortFilter &&
        sortFilter.value !== ""
    ) {

        if (
            sortFilter.value ===
            "salary-high"
        ) {

            filteredJobs.sort(
                function (a, b) {

                    return b.salaryMax -
                        a.salaryMax;

                }
            );

        }


        if (
            sortFilter.value ===
            "salary-low"
        ) {

            filteredJobs.sort(
                function (a, b) {

                    return a.salaryMin -
                        b.salaryMin;

                }
            );

        }


        if (
            sortFilter.value ===
            "title"
        ) {

            filteredJobs.sort(
                function (a, b) {

                    return a.title.localeCompare(
                        b.title
                    );

                }
            );

        }

    }


    displayJobs(
        filteredJobs
    );

}


// =====================================================
// SEARCH EVENTS
// =====================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterJobs
    );

}


if (locationInput) {

    locationInput.addEventListener(
        "input",
        filterJobs
    );

}


// =====================================================
// FILTER EVENTS
// =====================================================

[
    experienceFilter,
    jobTypeFilter,
    modeFilter,
    salaryFilter,
    sortFilter

].forEach(function (filter) {

    if (filter) {

        filter.addEventListener(
            "change",
            filterJobs
        );

    }

});


// =====================================================
// INITIAL DISPLAY
// =====================================================

if (jobsContainer) {

    displayJobs(jobsData);

}