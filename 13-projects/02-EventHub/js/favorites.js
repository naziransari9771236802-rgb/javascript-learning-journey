/* =========================================================
   EVENTHUB - FAVORITES PAGE
   ========================================================= */


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeFavoritesPage();

    }
);


/* =========================================================
   INITIALIZE FAVORITES PAGE
   ========================================================= */

function initializeFavoritesPage() {

    renderFavorites();

}


/* =========================================================
   RENDER FAVORITES
   ========================================================= */

function renderFavorites() {

    const container =
        document.querySelector(
            "[data-favorites-list]"
        );


    if (!container) {
        return;
    }


    const favoriteIds =
        getFavorites();


    const favoriteEvents =
        eventsData.filter(
            event =>
                favoriteIds.includes(
                    event.id
                )
        );


    if (!favoriteEvents.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    ♡
                </div>

                <h2>
                    No Favorite Events
                </h2>

                <p>
                    Save events you like and
                    they will appear here.
                </p>

                <a
                    href="events.html"
                    class="btn btn-primary"
                >
                    Explore Events
                </a>

            </div>

        `;

        updateFavoritesCount(0);

        return;
    }


    renderEventCards(
        favoriteEvents,
        container
    );


    updateFavoritesCount(
        favoriteEvents.length
    );


    setupFavoriteRemoveButtons();

}


/* =========================================================
   FAVORITES COUNT
   ========================================================= */

function updateFavoritesCount(
    count
) {

    const elements =
        document.querySelectorAll(
            "[data-favorites-count]"
        );


    elements.forEach(
        element => {

            element.textContent =
                count;

        }
    );

}


/* =========================================================
   REMOVE FAVORITE
   ========================================================= */

function removeFavoriteFromPage(
    eventId
) {

    const id =
        Number(eventId);


    removeFavorite(id);


    showToast(
        "Event removed from favorites."
    );


    renderFavorites();

}


/* =========================================================
   FAVORITE BUTTONS
   ========================================================= */

function setupFavoriteRemoveButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-favorite-id]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();


                    const eventId =
                        button.dataset.favoriteId;


                    removeFavoriteFromPage(
                        eventId
                    );

                }
            );

        }
    );

}


/* =========================================================
   CLEAR ALL FAVORITES
   ========================================================= */

function clearAllFavorites() {

    const favorites =
        getFavorites();


    if (!favorites.length) {

        showToast(
            "Your favorites list is already empty.",
            "warning"
        );

        return;
    }


    const confirmed =
        confirm(
            "Remove all favorite events?"
        );


    if (!confirmed) {
        return;
    }


    saveFavorites([]);


    showToast(
        "All favorites removed."
    );


    renderFavorites();

}


/* =========================================================
   CLEAR FAVORITES BUTTON
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const clearButton =
            document.querySelector(
                "[data-clear-favorites]"
            );


        if (!clearButton) {
            return;
        }


        clearButton.addEventListener(
            "click",
            clearAllFavorites
        );

    }
);


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.initializeFavoritesPage =
    initializeFavoritesPage;

window.renderFavorites =
    renderFavorites;

window.removeFavoriteFromPage =
    removeFavoriteFromPage;

window.clearAllFavorites =
    clearAllFavorites;