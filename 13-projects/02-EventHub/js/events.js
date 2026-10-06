/* =========================================================
   EVENTHUB - EVENTS PAGE
   ========================================================= */


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeEventsPage();

    }
);


/* =========================================================
   INITIALIZE EVENTS PAGE
   ========================================================= */

function initializeEventsPage() {

    setupEventSearch();

    setupEventFilters();

    loadEventsFromURL();

    renderAllEvents();

}


/* =========================================================
   CURRENT EVENT LIST
   ========================================================= */

let filteredEvents = [...eventsData];


/* =========================================================
   RENDER ALL EVENTS
   ========================================================= */

function renderAllEvents() {

    const container =
        document.querySelector(
            "[data-events-list]"
        );


    if (!container) {
        return;
    }


    renderEventCards(
        filteredEvents,
        container
    );


    updateEventCount(
        filteredEvents.length
    );

}


/* =========================================================
   UPDATE EVENT COUNT
   ========================================================= */

function updateEventCount(count) {

    const elements =
        document.querySelectorAll(
            "[data-event-count]"
        );


    elements.forEach(
        element => {

            element.textContent =
                count;

        }
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupEventSearch() {

    const searchInput =
        document.querySelector(
            "[data-event-search]"
        );


    if (!searchInput) {
        return;
    }


    searchInput.addEventListener(
        "input",
        debounce(
            () => {

                applyFilters();

            },
            250
        )
    );

}


/* =========================================================
   FILTERS
   ========================================================= */

function setupEventFilters() {

    const filterElements =
        document.querySelectorAll(
            "[data-event-filter]"
        );


    filterElements.forEach(
        element => {

            element.addEventListener(
                "change",
                () => {

                    applyFilters();

                }
            );

        }
    );

}


/* =========================================================
   APPLY FILTERS
   ========================================================= */

function applyFilters() {

    const searchInput =
        document.querySelector(
            "[data-event-search]"
        );


    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const categoryElement =
        document.querySelector(
            "[data-event-filter='category']"
        );


    const locationElement =
        document.querySelector(
            "[data-event-filter='location']"
        );


    const priceElement =
        document.querySelector(
            "[data-event-filter='price']"
        );


    const sortElement =
        document.querySelector(
            "[data-event-filter='sort']"
        );


    const category =
        categoryElement
            ? categoryElement.value
            : "all";


    const location =
        locationElement
            ? locationElement.value
            : "all";


    const price =
        priceElement
            ? priceElement.value
            : "all";


    const sort =
        sortElement
            ? sortElement.value
            : "default";


    let result =
        [...eventsData];


    /* ================= SEARCH ================= */

    if (search) {

        result =
            result.filter(
                event => {

                    return (

                        event.title
                            .toLowerCase()
                            .includes(search)

                        ||

                        event.category
                            .toLowerCase()
                            .includes(search)

                        ||

                        event.location
                            .toLowerCase()
                            .includes(search)

                        ||

                        event.organizer
                            .toLowerCase()
                            .includes(search)

                    );

                }
            );

    }


    /* ================= CATEGORY ================= */

    if (
        category &&
        category !== "all"
    ) {

        result =
            result.filter(
                event =>
                    event.category ===
                    category
            );

    }


    /* ================= LOCATION ================= */

    if (
        location &&
        location !== "all"
    ) {

        result =
            result.filter(
                event =>
                    event.location ===
                    location
            );

    }


    /* ================= PRICE ================= */

    if (price === "under500") {

        result =
            result.filter(
                event =>
                    event.price < 500
            );

    }

    else if (price === "500to1000") {

        result =
            result.filter(
                event =>
                    event.price >= 500 &&
                    event.price <= 1000
            );

    }

    else if (price === "above1000") {

        result =
            result.filter(
                event =>
                    event.price > 1000
            );

    }


    /* ================= SORT ================= */

    if (sort === "price-low") {

        result.sort(
            (a, b) =>
                a.price - b.price
        );

    }

    else if (sort === "price-high") {

        result.sort(
            (a, b) =>
                b.price - a.price
        );

    }

    else if (sort === "rating") {

        result.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }

    else if (sort === "popular") {

        result.sort(
            (a, b) =>
                b.attendees - a.attendees
        );

    }

    else if (sort === "date") {

        result.sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        );

    }


    filteredEvents =
        result;


    renderAllEvents();

}


/* =========================================================
   LOAD FILTERS FROM URL
   ========================================================= */

function loadEventsFromURL() {

    const search =
        getURLParam("search");


    const category =
        getURLParam("category");


    const searchInput =
        document.querySelector(
            "[data-event-search]"
        );


    const categorySelect =
        document.querySelector(
            "[data-event-filter='category']"
        );


    if (
        searchInput &&
        search
    ) {

        searchInput.value =
            search;

    }


    if (
        categorySelect &&
        category
    ) {

        categorySelect.value =
            category;

    }


    if (
        search ||
        category
    ) {

        applyFilters();

    }

}


/* =========================================================
   RESET FILTERS
   ========================================================= */

function resetEventFilters() {

    const searchInput =
        document.querySelector(
            "[data-event-search]"
        );


    const filterElements =
        document.querySelectorAll(
            "[data-event-filter]"
        );


    if (searchInput) {

        searchInput.value = "";

    }


    filterElements.forEach(
        element => {

            element.value = "all";

        }
    );


    filteredEvents =
        [...eventsData];


    renderAllEvents();

}


/* =========================================================
   RESET BUTTON
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const resetButton =
            document.querySelector(
                "[data-reset-filters]"
            );


        if (!resetButton) {
            return;
        }


        resetButton.addEventListener(
            "click",
            resetEventFilters
        );

    }
);


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.initializeEventsPage =
    initializeEventsPage;

window.renderAllEvents =
    renderAllEvents;

window.applyFilters =
    applyFilters;

window.resetEventFilters =
    resetEventFilters;