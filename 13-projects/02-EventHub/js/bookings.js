/* =========================================================
   EVENTHUB - MY BOOKINGS PAGE
   ========================================================= */


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeBookingsPage();

    }
);


/* =========================================================
   INITIALIZE BOOKINGS PAGE
   ========================================================= */

function initializeBookingsPage() {

    renderBookings();

}


/* =========================================================
   RENDER BOOKINGS
   ========================================================= */

function renderBookings() {

    const container =
        document.querySelector(
            "[data-bookings-list]"
        );


    if (!container) {
        return;
    }


    const bookings =
        getBookings();


    if (!bookings.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🎟️
                </div>

                <h2>
                    No Bookings Yet
                </h2>

                <p>
                    You haven't booked any events yet.
                </p>

                <a
                    href="events.html"
                    class="btn btn-primary"
                >
                    Explore Events
                </a>

            </div>

        `;

        updateBookingCount(0);

        return;
    }


    container.innerHTML =
        bookings
            .slice()
            .reverse()
            .map(
                booking =>
                    createBookingCard(
                        booking
                    )
            )
            .join("");


    updateBookingCount(
        bookings.length
    );


    setupCancelButtons();

}


/* =========================================================
   CREATE BOOKING CARD
   ========================================================= */

function createBookingCard(
    booking
) {

    return `

        <article
            class="booking-card"
            data-booking-id="${booking.id}"
        >

            <div class="booking-card-header">

                <div>

                    <span class="booking-label">
                        Booking ID
                    </span>

                    <strong>
                        ${booking.id}
                    </strong>

                </div>


                <span class="booking-status confirmed">
                    ${booking.status}
                </span>

            </div>


            <div class="booking-card-body">

                <div class="booking-event-info">

                    <span class="event-category">
                        Event
                    </span>

                    <h3>
                        ${booking.eventTitle}
                    </h3>

                    <p>
                        📅 ${formatDate(
                            booking.eventDate
                        )}
                    </p>

                    <p>
                        ⏰ ${booking.eventTime}
                    </p>

                    <p>
                        📍 ${booking.location}
                    </p>

                </div>


                <div class="booking-customer-info">

                    <p>
                        <strong>
                            Attendee:
                        </strong>

                        ${booking.customerName}
                    </p>

                    <p>
                        <strong>
                            Tickets:
                        </strong>

                        ${booking.quantity}
                    </p>

                    <p>
                        <strong>
                            Total:
                        </strong>

                        ${formatPrice(
                            booking.total
                        )}
                    </p>

                </div>

            </div>


            <div class="booking-card-footer">

                <span>
                    Booked on
                    ${formatDate(
                        booking.bookingDate
                    )}
                </span>


                <button
                    type="button"
                    class="btn btn-outline cancel-booking-btn"
                    data-cancel-booking="${booking.id}"
                >
                    Cancel Booking
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   UPDATE BOOKING COUNT
   ========================================================= */

function updateBookingCount(
    count
) {

    const elements =
        document.querySelectorAll(
            "[data-booking-count]"
        );


    elements.forEach(
        element => {

            element.textContent =
                count;

        }
    );

}


/* =========================================================
   CANCEL BUTTONS
   ========================================================= */

function setupCancelButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-cancel-booking]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const bookingId =
                        button.dataset.cancelBooking;


                    cancelBooking(
                        bookingId
                    );

                }
            );

        }
    );

}


/* =========================================================
   CANCEL BOOKING
   ========================================================= */

function cancelBooking(
    bookingId
) {

    const confirmed =
        confirm(
            "Are you sure you want to cancel this booking?"
        );


    if (!confirmed) {
        return;
    }


    const bookings =
        getBookings();


    const updatedBookings =
        bookings.map(
            booking => {

                if (
                    booking.id ===
                    bookingId
                ) {

                    return {
                        ...booking,
                        status: "Cancelled"
                    };

                }


                return booking;

            }
        );


    saveBookings(
        updatedBookings
    );


    showToast(
        "Booking cancelled successfully."
    );


    renderBookings();

}


/* =========================================================
   DELETE BOOKING
   ========================================================= */

function deleteBooking(
    bookingId
) {

    const confirmed =
        confirm(
            "Delete this booking permanently?"
        );


    if (!confirmed) {
        return;
    }


    const bookings =
        getBookings();


    const updatedBookings =
        bookings.filter(
            booking =>
                booking.id !==
                bookingId
        );


    saveBookings(
        updatedBookings
    );


    showToast(
        "Booking deleted."
    );


    renderBookings();

}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.initializeBookingsPage =
    initializeBookingsPage;

window.renderBookings =
    renderBookings;

window.createBookingCard =
    createBookingCard;

window.cancelBooking =
    cancelBooking;

window.deleteBooking =
    deleteBooking;