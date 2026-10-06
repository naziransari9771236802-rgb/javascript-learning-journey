// =====================================================
// JOBFINDER - MAIN JAVASCRIPT
// =====================================================


// ================= DOM READY =================

document.addEventListener("DOMContentLoaded", function () {

    console.log("JobFinder loaded successfully.");

});


// ================= NEWSLETTER =================

const newsletterForm =
    document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput =
            document.getElementById("newsletterEmail");

        if (!emailInput) return;

        const email =
            emailInput.value.trim();

        if (email === "") {

            alert("Please enter your email.");

            return;
        }

        localStorage.setItem(
            "newsletterEmail",
            email
        );

        alert(
            "Thank you for subscribing to JobFinder!"
        );

        emailInput.value = "";

    });

}


// ================= LOGOUT =================

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("jobFinderUser");

        window.location.href = "login.html";

    });

}


// ================= HELPER =================

function getSavedJobs() {

    const savedJobs =
        localStorage.getItem("savedJobs");

    if (!savedJobs) {

        return [];

    }

    try {

        return JSON.parse(savedJobs);

    } catch (error) {

        console.error(
            "Saved jobs data is invalid."
        );

        return [];

    }

}


// ================= SAVE JOBS =================

function saveSavedJobs(savedJobs) {

    localStorage.setItem(
        "savedJobs",
        JSON.stringify(savedJobs)
    );

}


// ================= TOGGLE SAVE =================

function toggleSavedJob(jobId) {

    let savedJobs =
        getSavedJobs();

    jobId = Number(jobId);


    const alreadySaved =
        savedJobs.includes(jobId);


    if (alreadySaved) {

        savedJobs =
            savedJobs.filter(function (id) {

                return id !== jobId;

            });

    } else {

        savedJobs.push(jobId);

    }


    saveSavedJobs(savedJobs);

    return !alreadySaved;

}


// ================= CHECK SAVED =================

function isJobSaved(jobId) {

    const savedJobs =
        getSavedJobs();

    return savedJobs.includes(
        Number(jobId)
    );

}