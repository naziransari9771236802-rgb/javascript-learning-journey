// =========================================
// FinanceFlow - Main Application
// =========================================

import {
    initializeDashboard
} from "./dashboard.js";

import {
    initializeTransactions
} from "./transactions.js";

import {
    initializeBudgets
} from "./budgets.js";

import {
    initializeReports
} from "./reports.js";

import {
    initializeSettings
} from "./settings.js";


// =========================================
// Application Start
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeCurrentPage();

    }
);


// =========================================
// Detect Current Page
// =========================================

function initializeCurrentPage() {

    const path =
        window.location.pathname
            .toLowerCase();


    if (
        path.endsWith(
            "index.html"
        )
        ||
        path.endsWith("/")
    ) {

        initializeDashboard();

    }


    if (
        path.includes(
            "transactions.html"
        )
    ) {

        initializeTransactions();

    }


    if (
        path.includes(
            "budgets.html"
        )
    ) {

        initializeBudgets();

    }


    if (
        path.includes(
            "reports.html"
        )
    ) {

        initializeReports();

    }


    if (
        path.includes(
            "settings.html"
        )
    ) {

        initializeSettings();

    }

}