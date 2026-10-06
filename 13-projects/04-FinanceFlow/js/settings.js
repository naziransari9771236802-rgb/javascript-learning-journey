// =========================================
// FinanceFlow - Settings
// =========================================

import {
    getSettings,
    saveSettings,
    clearTransactions,
    resetApplication
} from "./storage.js";

import {
    showNotification
} from "./utils.js";


// =========================================
// Initialize
// =========================================

export function initializeSettings() {

    const settings =
        getSettings();


    const currency =
        document.querySelector(
            "#currencySetting"
        );


    const theme =
        document.querySelector(
            "#themeSetting"
        );


    if (currency) {

        currency.value =
            settings.currency;

    }


    if (theme) {

        theme.value =
            settings.theme;

    }


    currency?.addEventListener(
        "change",
        event => {

            const current =
                getSettings();


            current.currency =
                event.target.value;


            saveSettings(current);


            showNotification(
                "Currency preference saved."
            );

        }
    );


    theme?.addEventListener(
        "change",
        event => {

            const current =
                getSettings();


            current.theme =
                event.target.value;


            saveSettings(current);

            applyTheme(
                event.target.value
            );


            showNotification(
                "Theme preference saved."
            );

        }
    );


    applyTheme(
        settings.theme
    );


    setupDataButtons();
}


// =========================================
// Theme
// =========================================

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add(
            "dark-theme"
        );

    } else {

        document.body.classList.remove(
            "dark-theme"
        );

    }
}


// =========================================
// Data Buttons
// =========================================

function setupDataButtons() {

    const clearButton =
        document.querySelector(
            "#clearTransactionsBtn"
        );


    const resetButton =
        document.querySelector(
            "#resetAppBtn"
        );


    clearButton?.addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    "Delete all transactions?"
                );


            if (!confirmed) {
                return;
            }


            clearTransactions();


            showNotification(
                "All transactions cleared."
            );


            setTimeout(() => {

                location.reload();

            }, 700);

        }
    );


    resetButton?.addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    "Reset the entire FinanceFlow application?"
                );


            if (!confirmed) {
                return;
            }


            resetApplication();


            showNotification(
                "Application reset successfully."
            );


            setTimeout(() => {

                location.reload();

            }, 700);

        }
    );
}