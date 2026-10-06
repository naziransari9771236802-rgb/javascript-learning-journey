/* =========================================================
   EVENTHUB - LOCAL STORAGE
   ========================================================= */


/* =========================================================
   STORAGE KEYS
   ========================================================= */

const STORAGE_KEYS = {
    user: "eventhub_user",
    bookings: "eventhub_bookings",
    favorites: "eventhub_favorites",
    createdEvents: "eventhub_created_events"
};


/* =========================================================
   GET DATA
   ========================================================= */

function getStorageData(key, defaultValue = []) {

    try {

        const data = localStorage.getItem(key);

        if (!data) {
            return defaultValue;
        }

        return JSON.parse(data);

    } catch (error) {

        console.error(
            "Error reading localStorage:",
            error
        );

        return defaultValue;
    }
}


/* =========================================================
   SET DATA
   ========================================================= */

function setStorageData(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

        return true;

    } catch (error) {

        console.error(
            "Error saving to localStorage:",
            error
        );

        return false;
    }
}


/* =========================================================
   REMOVE DATA
   ========================================================= */

function removeStorageData(key) {

    localStorage.removeItem(key);

}


/* =========================================================
   USER
   ========================================================= */

function getUser() {

    return getStorageData(
        STORAGE_KEYS.user,
        null
    );

}


function saveUser(user) {

    return setStorageData(
        STORAGE_KEYS.user,
        user
    );

}


function removeUser() {

    removeStorageData(
        STORAGE_KEYS.user
    );

}


/* =========================================================
   BOOKINGS
   ========================================================= */

function getBookings() {

    return getStorageData(
        STORAGE_KEYS.bookings,
        []
    );

}


function saveBookings(bookings) {

    return setStorageData(
        STORAGE_KEYS.bookings,
        bookings
    );

}


function addBooking(booking) {

    const bookings =
        getBookings();

    bookings.push(booking);

    return saveBookings(
        bookings
    );

}


/* =========================================================
   FAVORITES
   ========================================================= */

function getFavorites() {

    return getStorageData(
        STORAGE_KEYS.favorites,
        []
    );

}


function saveFavorites(favorites) {

    return setStorageData(
        STORAGE_KEYS.favorites,
        favorites
    );

}


function addFavorite(eventId) {

    const favorites =
        getFavorites();

    const id =
        Number(eventId);

    if (!favorites.includes(id)) {

        favorites.push(id);

        saveFavorites(
            favorites
        );

    }

}


function removeFavorite(eventId) {

    const id =
        Number(eventId);

    const favorites =
        getFavorites();

    const updatedFavorites =
        favorites.filter(
            favoriteId =>
                favoriteId !== id
        );

    saveFavorites(
        updatedFavorites
    );

}


function isFavorite(eventId) {

    const id =
        Number(eventId);

    const favorites =
        getFavorites();

    return favorites.includes(id);

}


/* =========================================================
   CREATED EVENTS
   ========================================================= */

function getCreatedEvents() {

    return getStorageData(
        STORAGE_KEYS.createdEvents,
        []
    );

}


function saveCreatedEvents(events) {

    return setStorageData(
        STORAGE_KEYS.createdEvents,
        events
    );

}


function addCreatedEvent(event) {

    const events =
        getCreatedEvents();

    events.push(event);

    return saveCreatedEvents(
        events
    );

}


/* =========================================================
   CLEAR ALL EVENTHUB DATA
   ========================================================= */

function clearEventHubStorage() {

    Object.values(
        STORAGE_KEYS
    ).forEach(
        key => {
            localStorage.removeItem(key);
        }
    );

}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.STORAGE_KEYS = STORAGE_KEYS;

window.getStorageData = getStorageData;
window.setStorageData = setStorageData;
window.removeStorageData = removeStorageData;

window.getUser = getUser;
window.saveUser = saveUser;
window.removeUser = removeUser;

window.getBookings = getBookings;
window.saveBookings = saveBookings;
window.addBooking = addBooking;

window.getFavorites = getFavorites;
window.saveFavorites = saveFavorites;
window.addFavorite = addFavorite;
window.removeFavorite = removeFavorite;
window.isFavorite = isFavorite;

window.getCreatedEvents = getCreatedEvents;
window.saveCreatedEvents = saveCreatedEvents;
window.addCreatedEvent = addCreatedEvent;

window.clearEventHubStorage =
    clearEventHubStorage;