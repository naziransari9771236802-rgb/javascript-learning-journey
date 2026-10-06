/* =========================================================
   EVENTHUB - UTILITY FUNCTIONS
   ========================================================= */


/* =========================================================
   SELECT ELEMENT
   ========================================================= */

function $(selector) {

    return document.querySelector(selector);

}


/* =========================================================
   SELECT ALL ELEMENTS
   ========================================================= */

function $$(selector) {

    return document.querySelectorAll(selector);

}


/* =========================================================
   GET URL PARAMETER
   ========================================================= */

function getURLParam(name) {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return params.get(name);

}


/* =========================================================
   FORMAT CURRENCY
   ========================================================= */

function formatPrice(price) {

    const amount =
        Number(price) || 0;

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(amount);

}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatDate(date) {

    if (!date) {
        return "";
    }

    const dateObject =
        new Date(date);

    if (isNaN(dateObject.getTime())) {
        return date;
    }

    return dateObject.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   GET EVENT BY ID
   ========================================================= */

function getEventById(id) {

    const eventId =
        Number(id);

    return eventsData.find(
        event =>
            event.id === eventId
    );

}


/* =========================================================
   SHOW TOAST MESSAGE
   ========================================================= */

function showToast(
    message,
    type = "success"
) {

    const existingToast =
        document.querySelector(
            ".eventhub-toast"
        );

    if (existingToast) {
        existingToast.remove();
    }


    const toast =
        document.createElement("div");

    toast.className =
        `eventhub-toast toast-${type}`;


    toast.innerHTML = `
        <span class="toast-icon">
            ${
                type === "error"
                    ? "✕"
                    : type === "warning"
                    ? "⚠"
                    : "✓"
            }
        </span>

        <span class="toast-message">
            ${message}
        </span>
    `;


    document.body.appendChild(
        toast
    );


    setTimeout(
        () => {

            toast.classList.add(
                "toast-hide"
            );

            setTimeout(
                () => {
                    toast.remove();
                },
                300
            );

        },
        3000
    );

}


/* =========================================================
   DEBOUNCE
   ========================================================= */

function debounce(
    callback,
    delay = 300
) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(
            () => {
                callback.apply(
                    this,
                    args
                );
            },
            delay
        );

    };

}


/* =========================================================
   CREATE EVENT CARD
   ========================================================= */

function createEventCard(event) {

    const favorite =
        typeof isFavorite === "function"
            ? isFavorite(event.id)
            : false;


    return `
        <article
            class="event-card"
            data-event-id="${event.id}"
        >

            <div class="event-card-image">

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

                <span class="event-category">
                    ${event.category}
                </span>

                <button
                    class="favorite-btn ${
                        favorite ? "active" : ""
                    }"
                    data-favorite-id="${event.id}"
                    type="button"
                >
                    ${
                        favorite
                            ? "♥"
                            : "♡"
                    }
                </button>

            </div>


            <div class="event-card-content">

                <div class="event-card-date">
                    📅 ${formatDate(event.date)}
                </div>

                <h3 class="event-card-title">
                    ${event.title}
                </h3>

                <p class="event-card-location">
                    📍 ${event.location}
                </p>

                <div class="event-card-bottom">

                    <strong class="event-card-price">
                        ${formatPrice(event.price)}
                    </strong>

                    <span class="event-card-rating">
                        ⭐ ${event.rating}
                    </span>

                </div>

                <a
                    href="event-details.html?id=${event.id}"
                    class="btn btn-primary event-view-btn"
                >
                    View Event
                </a>

            </div>

        </article>
    `;

}


/* =========================================================
   RENDER EVENT CARDS
   ========================================================= */

function renderEventCards(
    events,
    container
) {

    if (!container) {
        return;
    }


    if (!events || events.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <div class="empty-icon">
                    🔍
                </div>

                <h3>
                    No Events Found
                </h3>

                <p>
                    Try changing your search or filters.
                </p>

            </div>
        `;

        return;
    }


    container.innerHTML =
        events
            .map(
                event =>
                    createEventCard(event)
            )
            .join("");

}


/* =========================================================
   GET CURRENT YEAR
   ========================================================= */

function getCurrentYear() {

    return new Date().getFullYear();

}


/* =========================================================
   UPDATE COPYRIGHT YEAR
   ========================================================= */

function updateCopyrightYear() {

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(
        element => {

            element.textContent =
                getCurrentYear();

        }
    );

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    if (value === null ||
        value === undefined) {

        return "";

    }


    const div =
        document.createElement("div");

    div.textContent =
        String(value);

    return div.innerHTML;

}


/* =========================================================
   NUMBER VALIDATION
   ========================================================= */

function isPositiveNumber(value) {

    const number =
        Number(value);

    return (
        Number.isFinite(number) &&
        number > 0
    );

}


/* =========================================================
   EMAIL VALIDATION
   ========================================================= */

function isValidEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(
        String(email).trim()
    );

}


/* =========================================================
   INITIALIZE COMMON FUNCTIONS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCopyrightYear();

    }
);


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.$ = $;
window.$$ = $$;

window.getURLParam =
    getURLParam;

window.formatPrice =
    formatPrice;

window.formatDate =
    formatDate;

window.getEventById =
    getEventById;

window.showToast =
    showToast;

window.debounce =
    debounce;

window.createEventCard =
    createEventCard;

window.renderEventCards =
    renderEventCards;

window.getCurrentYear =
    getCurrentYear;

window.updateCopyrightYear =
    updateCopyrightYear;

window.escapeHTML =
    escapeHTML;

window.isPositiveNumber =
    isPositiveNumber;

window.isValidEmail =
    isValidEmail;