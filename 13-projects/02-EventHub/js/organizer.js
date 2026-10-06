/* =========================================================
   EVENTHUB - ORGANIZER DASHBOARD
   ========================================================= */


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeOrganizer();

    }
);


/* =========================================================
   INITIALIZE ORGANIZER
   ========================================================= */

function initializeOrganizer() {

    renderOrganizerStats();

    renderOrganizerEvents();

    setupOrganizerSearch();

}


/* =========================================================
   ORGANIZER STATS
   ========================================================= */

function renderOrganizerStats() {

    const totalEvents =
        eventsData.length;


    const totalAttendees =
        eventsData.reduce(
            (total, event) =>
                total + event.attendees,
            0
        );


    const totalRevenue =
        eventsData.reduce(
            (total, event) =>
                total +
                (
                    event.price *
                    event.attendees
                ),
            0
        );


    const averageRating =
        eventsData.length
            ? (
                eventsData.reduce(
                    (total, event) =>
                        total + event.rating,
                    0
                ) /
                eventsData.length
            ).toFixed(1)
            : "0.0";


    updateOrganizerStat(
        "[data-organizer-events]",
        totalEvents
    );


    updateOrganizerStat(
        "[data-organizer-attendees]",
        totalAttendees.toLocaleString(
            "en-IN"
        )
    );


    updateOrganizerStat(
        "[data-organizer-revenue]",
        formatPrice(totalRevenue)
    );


    updateOrganizerStat(
        "[data-organizer-rating]",
        averageRating
    );

}


/* =========================================================
   UPDATE STAT
   ========================================================= */

function updateOrganizerStat(
    selector,
    value
) {

    const element =
        document.querySelector(
            selector
        );


    if (element) {

        element.textContent =
            value;

    }

}


/* =========================================================
   RENDER ORGANIZER EVENTS
   ========================================================= */

function renderOrganizerEvents(
    events = eventsData
) {

    const container =
        document.querySelector(
            "[data-organizer-events-list]"
        );


    if (!container) {
        return;
    }


    if (!events.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    📅
                </div>

                <h3>
                    No Events Found
                </h3>

                <p>
                    There are no events available.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML =
        events
            .map(
                event =>
                    createOrganizerEventRow(
                        event
                    )
            )
            .join("");


    setupOrganizerDeleteButtons();

}


/* =========================================================
   CREATE ORGANIZER EVENT ROW
   ========================================================= */

function createOrganizerEventRow(
    event
) {

    const revenue =
        event.price *
        event.attendees;


    return `

        <div
            class="organizer-event-row"
            data-organizer-event="${event.id}"
        >

            <div class="organizer-event-image">

                <img
                    src="${event.image}"
                    alt="${event.title}"
                    onerror="
                        this.style.display='none';
                    "
                >

            </div>


            <div class="organizer-event-info">

                <span class="event-category">
                    ${event.category}
                </span>

                <h3>
                    ${event.title}
                </h3>

                <p>
                    📅 ${formatDate(event.date)}
                </p>

                <p>
                    📍 ${event.location}
                </p>

            </div>


            <div class="organizer-event-stats">

                <div>

                    <span>
                        Attendees
                    </span>

                    <strong>
                        ${event.attendees}
                    </strong>

                </div>


                <div>

                    <span>
                        Rating
                    </span>

                    <strong>
                        ⭐ ${event.rating}
                    </strong>

                </div>


                <div>

                    <span>
                        Revenue
                    </span>

                    <strong>
                        ${formatPrice(revenue)}
                    </strong>

                </div>

            </div>


            <div class="organizer-event-actions">

                <a
                    href="event-details.html?id=${event.id}"
                    class="btn btn-outline"
                >
                    View
                </a>


                <button
                    type="button"
                    class="btn btn-danger"
                    data-delete-organizer-event="${event.id}"
                >
                    Delete
                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   ORGANIZER SEARCH
   ========================================================= */

function setupOrganizerSearch() {

    const searchInput =
        document.querySelector(
            "[data-organizer-search]"
        );


    if (!searchInput) {
        return;
    }


    searchInput.addEventListener(
        "input",
        debounce(
            () => {

                const search =
                    searchInput.value
                        .trim()
                        .toLowerCase();


                if (!search) {

                    renderOrganizerEvents(
                        eventsData
                    );

                    return;

                }


                const filtered =
                    eventsData.filter(
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

                            );

                        }
                    );


                renderOrganizerEvents(
                    filtered
                );

            },
            250
        )
    );

}


/* =========================================================
   DELETE EVENT
   ========================================================= */

function deleteOrganizerEvent(
    eventId
) {

    const id =
        Number(eventId);


    const event =
        getEventById(id);


    if (!event) {

        showToast(
            "Event not found.",
            "error"
        );

        return;

    }


    const confirmed =
        confirm(
            `Delete "${event.title}"?`
        );


    if (!confirmed) {
        return;
    }


    /*
     * eventsData is demo data.
     * We cannot permanently modify
     * the original source file from
     * the browser, so we maintain a
     * deleted-event list in localStorage.
     */

    const deletedEvents =
        JSON.parse(
            localStorage.getItem(
                "eventhub_deleted_events"
            )
        ) || [];


    if (
        !deletedEvents.includes(id)
    ) {

        deletedEvents.push(id);

    }


    localStorage.setItem(
        "eventhub_deleted_events",
        JSON.stringify(
            deletedEvents
        )
    );


    showToast(
        "Event deleted successfully."
    );


    renderOrganizerEvents(
        eventsData.filter(
            event =>
                !deletedEvents.includes(
                    event.id
                )
        )
    );


    renderOrganizerStats();

}


/* =========================================================
   DELETE BUTTONS
   ========================================================= */

function setupOrganizerDeleteButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-delete-organizer-event]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    deleteOrganizerEvent(
                        button.dataset
                            .deleteOrganizerEvent
                    );

                }
            );

        }
    );

}


/* =========================================================
   GET ACTIVE ORGANIZER EVENTS
   ========================================================= */

function getActiveOrganizerEvents() {

    const deletedEvents =
        JSON.parse(
            localStorage.getItem(
                "eventhub_deleted_events"
            )
        ) || [];


    return eventsData.filter(
        event =>
            !deletedEvents.includes(
                event.id
            )
    );

}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.initializeOrganizer =
    initializeOrganizer;

window.renderOrganizerStats =
    renderOrganizerStats;

window.renderOrganizerEvents =
    renderOrganizerEvents;

window.createOrganizerEventRow =
    createOrganizerEventRow;

window.deleteOrganizerEvent =
    deleteOrganizerEvent;

window.getActiveOrganizerEvents =
    getActiveOrganizerEvents;