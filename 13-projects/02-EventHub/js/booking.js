/* =========================================================
   EVENTHUB - BOOKING PAGE
   ========================================================= */


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeBookingPage();

    }
);


/* =========================================================
   INITIALIZE BOOKING PAGE
   ========================================================= */

function initializeBookingPage() {

    const eventId =
        getURLParam("id");


    if (!eventId) {

        showBookingError(
            "No event selected."
        );

        return;
    }


    const event =
        getEventById(eventId);


    if (!event) {

        showBookingError(
            "Event not found."
        );

        return;
    }


    renderBookingEvent(event);

    setupTicketControls(event);

    setupBookingForm(event);

    updateBookingSummary(event);

}


/* =========================================================
   RENDER EVENT INFORMATION
   ========================================================= */

function renderBookingEvent(event) {

    const container =
        document.querySelector(
            "[data-booking-event]"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div class="booking-event-image">

            <img
                src="${event.image}"
                alt="${event.title}"
                onerror="
                    this.style.display='none';
                "
            >

        </div>


        <div class="booking-event-info">

            <span class="event-category">
                ${event.category}
            </span>

            <h2>
                ${event.title}
            </h2>

            <p>
                📅 ${formatDate(event.date)}
            </p>

            <p>
                ⏰ ${event.time}
            </p>

            <p>
                📍 ${event.location}
            </p>

            <strong>
                ${formatPrice(event.price)}
                / person
            </strong>

        </div>

    `;

}


/* =========================================================
   TICKET CONTROLS
   ========================================================= */

function setupTicketControls(event) {

    const quantityInput =
        document.querySelector(
            "[data-ticket-quantity]"
        );


    const decreaseButton =
        document.querySelector(
            "[data-ticket-decrease]"
        );


    const increaseButton =
        document.querySelector(
            "[data-ticket-increase]"
        );


    if (!quantityInput) {
        return;
    }


    if (decreaseButton) {

        decreaseButton.addEventListener(
            "click",
            () => {

                let quantity =
                    Number(
                        quantityInput.value
                    ) || 1;


                if (quantity > 1) {

                    quantity--;

                    quantityInput.value =
                        quantity;

                    updateBookingSummary(
                        event
                    );

                }

            }
        );

    }


    if (increaseButton) {

        increaseButton.addEventListener(
            "click",
            () => {

                let quantity =
                    Number(
                        quantityInput.value
                    ) || 1;


                if (quantity < 10) {

                    quantity++;

                    quantityInput.value =
                        quantity;

                    updateBookingSummary(
                        event
                    );

                }

            }
        );

    }


    quantityInput.addEventListener(
        "input",
        () => {

            let quantity =
                Number(
                    quantityInput.value
                ) || 1;


            if (quantity < 1) {
                quantity = 1;
            }


            if (quantity > 10) {
                quantity = 10;
            }


            quantityInput.value =
                quantity;


            updateBookingSummary(
                event
            );

        }
    );

}


/* =========================================================
   BOOKING SUMMARY
   ========================================================= */

function updateBookingSummary(event) {

    const quantityInput =
        document.querySelector(
            "[data-ticket-quantity]"
        );


    const quantity =
        quantityInput
            ? Number(
                quantityInput.value
            ) || 1
            : 1;


    const subtotal =
        event.price * quantity;


    const serviceFee =
        Math.round(
            subtotal * 0.05
        );


    const total =
        subtotal + serviceFee;


    const subtotalElement =
        document.querySelector(
            "[data-subtotal]"
        );


    const feeElement =
        document.querySelector(
            "[data-service-fee]"
        );


    const totalElement =
        document.querySelector(
            "[data-total]"
        );


    if (subtotalElement) {

        subtotalElement.textContent =
            formatPrice(subtotal);

    }


    if (feeElement) {

        feeElement.textContent =
            formatPrice(serviceFee);

    }


    if (totalElement) {

        totalElement.textContent =
            formatPrice(total);

    }

}


/* =========================================================
   BOOKING FORM
   ========================================================= */

function setupBookingForm(event) {

    const form =
        document.querySelector(
            "[data-booking-form]"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        eventObject => {

            eventObject.preventDefault();


            const quantityInput =
                document.querySelector(
                    "[data-ticket-quantity]"
                );


            const quantity =
                quantityInput
                    ? Number(
                        quantityInput.value
                    ) || 1
                    : 1;


            const nameInput =
                form.querySelector(
                    "[name='name']"
                );


            const emailInput =
                form.querySelector(
                    "[name='email']"
                );


            const phoneInput =
                form.querySelector(
                    "[name='phone']"
                );


            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";


            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";


            const phone =
                phoneInput
                    ? phoneInput.value.trim()
                    : "";


            if (!name) {

                showToast(
                    "Please enter your name.",
                    "error"
                );

                return;
            }


            if (
                !isValidEmail(email)
            ) {

                showToast(
                    "Please enter a valid email.",
                    "error"
                );

                return;
            }


            if (!phone) {

                showToast(
                    "Please enter your phone number.",
                    "error"
                );

                return;
            }


            const subtotal =
                event.price * quantity;


            const serviceFee =
                Math.round(
                    subtotal * 0.05
                );


            const total =
                subtotal + serviceFee;


            const booking = {

                id:
                    "BK" +
                    Date.now(),

                eventId:
                    event.id,

                eventTitle:
                    event.title,

                eventDate:
                    event.date,

                eventTime:
                    event.time,

                location:
                    event.location,

                quantity:
                    quantity,

                price:
                    event.price,

                subtotal:
                    subtotal,

                serviceFee:
                    serviceFee,

                total:
                    total,

                customerName:
                    name,

                customerEmail:
                    email,

                customerPhone:
                    phone,

                status:
                    "Confirmed",

                bookingDate:
                    new Date().toISOString()

            };


            addBooking(
                booking
            );


            showToast(
                "Booking confirmed successfully!"
            );


            setTimeout(
                () => {

                    window.location.href =
                        "my-bookings.html";

                },
                1000
            );

        }
    );

}


/* =========================================================
   BOOKING ERROR
   ========================================================= */

function showBookingError(
    message
) {

    const container =
        document.querySelector(
            "[data-booking-event]"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <div class="empty-state">

            <div class="empty-icon">
                ⚠️
            </div>

            <h2>
                Booking Error
            </h2>

            <p>
                ${message}
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
   GLOBAL ACCESS
   ========================================================= */

window.initializeBookingPage =
    initializeBookingPage;

window.renderBookingEvent =
    renderBookingEvent;

window.updateBookingSummary =
    updateBookingSummary;

window.showBookingError =
    showBookingError;