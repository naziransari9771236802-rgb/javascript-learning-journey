/* =========================================================
   EVENTHUB - HOME PAGE
   ========================================================= */


/* =========================================================
   HOME PAGE INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeHomePage();

    }
);


/* =========================================================
   INITIALIZE HOME PAGE
   ========================================================= */

function initializeHomePage() {

    renderFeaturedEvents();

    renderPopularEvents();

    renderCategories();

    setupHomeSearch();

    setupCategoryLinks();

}


/* =========================================================
   FEATURED EVENTS
   ========================================================= */

function renderFeaturedEvents() {

    const container =
        document.querySelector(
            "[data-featured-events]"
        );


    if (!container) {
        return;
    }


    const featuredEvents =
        eventsData
            .slice()
            .sort(
                (a, b) =>
                    b.rating - a.rating
            )
            .slice(0, 4);


    renderEventCards(
        featuredEvents,
        container
    );

}


/* =========================================================
   POPULAR EVENTS
   ========================================================= */

function renderPopularEvents() {

    const container =
        document.querySelector(
            "[data-popular-events]"
        );


    if (!container) {
        return;
    }


    const popularEvents =
        eventsData
            .slice()
            .sort(
                (a, b) =>
                    b.attendees - a.attendees
            )
            .slice(0, 4);


    renderEventCards(
        popularEvents,
        container
    );

}


/* =========================================================
   CATEGORIES
   ========================================================= */

function renderCategories() {

    const container =
        document.querySelector(
            "[data-categories]"
        );


    if (!container) {
        return;
    }


    container.innerHTML =
        categoriesData
            .map(
                category => `

                    <a
                        href="events.html?category=${encodeURIComponent(
                            category.name
                        )}"
                        class="category-card"
                    >

                        <div class="category-icon">
                            ${category.icon}
                        </div>

                        <h3>
                            ${category.name}
                        </h3>

                        <span>
                            ${
                                eventsData.filter(
                                    event =>
                                        event.category ===
                                        category.name
                                ).length
                            }
                            Events
                        </span>

                    </a>

                `
            )
            .join("");

}


/* =========================================================
   HOME SEARCH
   ========================================================= */

function setupHomeSearch() {

    const searchForm =
        document.querySelector(
            ".hero-search"
        );


    if (!searchForm) {
        return;
    }


    const input =
        searchForm.querySelector(
            "input"
        );


    if (!input) {
        return;
    }


    searchForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const search =
                input.value.trim();


            if (!search) {

                showToast(
                    "Please enter an event name."
                );

                return;
            }


            window.location.href =
                `events.html?search=${encodeURIComponent(
                    search
                )}`;

        }
    );

}


/* =========================================================
   CATEGORY LINKS
   ========================================================= */

function setupCategoryLinks() {

    const categoryButtons =
        document.querySelectorAll(
            "[data-category]"
        );


    categoryButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const category =
                        button.dataset.category;


                    if (!category) {
                        return;
                    }


                    window.location.href =
                        `events.html?category=${encodeURIComponent(
                            category
                        )}`;

                }
            );

        }
    );

}


/* =========================================================
   HERO STATS
   ========================================================= */

function updateHomeStats() {

    const totalEvents =
        document.querySelector(
            "[data-total-events]"
        );


    const totalCategories =
        document.querySelector(
            "[data-total-categories]"
        );


    const totalAttendees =
        document.querySelector(
            "[data-total-attendees]"
        );


    if (totalEvents) {

        totalEvents.textContent =
            eventsData.length;

    }


    if (totalCategories) {

        totalCategories.textContent =
            categoriesData.length;

    }


    if (totalAttendees) {

        const attendees =
            eventsData.reduce(
                (total, event) =>
                    total + event.attendees,
                0
            );


        totalAttendees.textContent =
            `${attendees.toLocaleString("en-IN")}+`;

    }

}


/* =========================================================
   UPDATE STATS WHEN PAGE LOADS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateHomeStats();

    }
);


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.initializeHomePage =
    initializeHomePage;

window.renderFeaturedEvents =
    renderFeaturedEvents;

window.renderPopularEvents =
    renderPopularEvents;

window.renderCategories =
    renderCategories;

window.setupHomeSearch =
    setupHomeSearch;

window.setupCategoryLinks =
    setupCategoryLinks;

window.updateHomeStats =
    updateHomeStats;