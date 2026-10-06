/* =========================================================
   EVENTHUB - EVENT DETAILS PAGE
   ========================================================= */


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeEventDetails();

    }
);


/* =========================================================
   INITIALIZE EVENT DETAILS
   ========================================================= */

function initializeEventDetails() {

    const eventId =
        getURLParam("id");


    if (!eventId) {

        showEventNotFound();

        return;
    }


    const event =
        getEventById(eventId);


    if (!event) {

        showEventNotFound();

        return;
    }


    renderEventDetails(event);

    setupFavoriteButton(event);

    setupBookingButton(event);

}


/* =========================================================
   RENDER EVENT DETAILS
   ========================================================= */

function renderEventDetails(event) {

    const container =
        document.querySelector(
            "[data-event-details]"
        );


    if (!container) {
        return;
    }


    const favorite =
        isFavorite(event.id);


    container.innerHTML = `

        <div class="event-details-wrapper">


            <!-- EVENT IMAGE -->

            <div class="event-details-image">

                <img
                    src="${event.image}"
                    alt="${event.title}"
                    onerror="
                        this.style.display='none';
                        this.nextElementSibling.style.display='flex';
                    "
                >

                <div
                    class="event-image-fallback"
                    style="display:none;"
                >
                    🎟️
                </div>

            </div>


            <!-- EVENT INFORMATION -->

            <div class="event-details-content">

                <span class="event-category">
                    ${event.category}
                </span>


                <h1>
                    ${event.title}
                </h1>


                <div class="event-rating">
                    ⭐ ${event.rating}
                </div>


                <p class="event-description">
                    ${event.description}
                </p>


                <!-- EVENT META -->

                <div class="event-meta-list">


                    <div class="event-meta-item">

                        <span class="meta-icon">
                            📅
                        </span>

                        <div>

                            <strong>
                                Date
                            </strong>

                            <span>
                                ${formatDate(event.date)}
                            </span>

                        </div>

                    </div>


                    <div class="event-meta-item">

                        <span class="meta-icon">
                            ⏰
                        </span>

                        <div>

                            <strong>
                                Time
                            </strong>

                            <span>
                                ${event.time}
                            </span>

                        </div>

                    </div>


                    <div class="event-meta-item">

                        <span class="meta-icon">
                            📍
                        </span>

                        <div>

                            <strong>
                                Location
                            </strong>

                            <span>
                                ${event.location}
                            </span>

                        </div>

                    </div>


                    <div class="event-meta-item">

                        <span class="meta-icon">
                            🏢
                        </span>

                        <div>

                            <strong>
                                Venue
                            </strong>

                            <span>
                                ${event.venue}
                            </span>

                        </div>

                    </div>


                    <div class="event-meta-item">

                        <span class="meta-icon">
                            👥
                        </span>

                        <div>

                            <strong>
                                Attendees
                            </strong>

                            <span>
                                ${event.attendees}+
                            </span>

                        </div>

                    </div>


                    <div class="event-meta-item">

                        <span class="meta-icon">
                            👤
                        </span>

                        <div>

                            <strong>
                                Organizer
                            </strong>

                            <span>
                                ${event.organizer}
                            </span>

                        </div>

                    </div>

                </div>


                <!-- PRICE -->

                <div class="event-details-price">

                    <span>
                        Starting from
                    </span>

                    <strong>
                        ${formatPrice(event.price)}
                    </strong>

                    <small>
                        per person
                    </small>

                </div>


                <!-- ACTIONS -->

                <div class="event-details-actions">

                    <button
                        type="button"
                        class="btn btn-outline favorite-event-btn"
                        data-details-favorite
                    >
                        ${
                            favorite
                                ? "♥ Saved"
                                : "♡ Save Event"
                        }
                    </button>


                    <a
                        href="booking.html?id=${event.id}"
                        class="btn btn-primary"
                        data-book-event
                    >
                        Book Now
                    </a>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   EVENT NOT FOUND
   ========================================================= */

function showEventNotFound() {

    const container =
        document.querySelector(
            "[data-event-details]"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                😕
            </div>

            <h2>
                Event Not Found
            </h2>

            <p>
                Sorry, the event you are looking for
                does not exist.
            </p>

            <a
                href="events.html"
                class="btn btn-primary"
            >
                Browse Events
            </a>

        </div>

    `;

}


/* =========================================================
   FAVORITE BUTTON
   ========================================================= */

function setupFavoriteButton(event) {

    const button =
        document.querySelector(
            "[data-details-favorite]"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            if (
                isFavorite(event.id)
            ) {

                removeFavorite(
                    event.id
                );


                button.textContent =
                    "♡ Save Event";


                button.classList.remove(
                    "active"
                );


                showToast(
                    "Event removed from favorites."
                );

            } else {

                addFavorite(
                    event.id
                );


                button.textContent =
                    "♥ Saved";


                button.classList.add(
                    "active"
                );


                showToast(
                    "Event added to favorites."
                );

            }

        }
    );

}


/* =========================================================
   BOOKING BUTTON
   ========================================================= */

function setupBookingButton(event) {

    const button =
        document.querySelector(
            "[data-book-event]"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            /*
             * Booking page will receive
             * the event ID through URL.
             */

            button.href =
                `booking.html?id=${event.id}`;

        }
    );

}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.initializeEventDetails =
    initializeEventDetails;

window.renderEventDetails =
    renderEventDetails;

window.showEventNotFound =
    showEventNotFound;