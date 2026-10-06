// =========================================
// FinanceFlow - LocalStorage
// =========================================

import {
    defaultTransactions,
    defaultBudgets
} from "./data.js";

const TRANSACTION_KEY = "financeflow_transactions";
const BUDGET_KEY = "financeflow_budgets";
const SETTINGS_KEY = "financeflow_settings";


// =========================================
// Transactions
// =========================================

export function getTransactions() {

    const data = localStorage.getItem(TRANSACTION_KEY);

    if (!data) {
        localStorage.setItem(
            TRANSACTION_KEY,
            JSON.stringify(defaultTransactions)
        );

        return [...defaultTransactions];
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Transaction data error:", error);

        return [];
    }
}


export function saveTransactions(transactions) {

    localStorage.setItem(
        TRANSACTION_KEY,
        JSON.stringify(transactions)
    );
}


// =========================================
// Budgets
// =========================================

export function getBudgets() {

    const data = localStorage.getItem(BUDGET_KEY);

    if (!data) {
        localStorage.setItem(
            BUDGET_KEY,
            JSON.stringify(defaultBudgets)
        );

        return [...defaultBudgets];
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Budget data error:", error);

        return [];
    }
}


export function saveBudgets(budgets) {

    localStorage.setItem(
        BUDGET_KEY,
        JSON.stringify(budgets)
    );
}


// =========================================
// Settings
// =========================================

const defaultSettings = {
    currency: "INR",
    theme: "light"
};


export function getSettings() {

    const data = localStorage.getItem(SETTINGS_KEY);

    if (!data) {

        localStorage.setItem(
            SETTINGS_KEY,
            JSON.stringify(defaultSettings)
        );

        return { ...defaultSettings };
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        return { ...defaultSettings };
    }
}


export function saveSettings(settings) {

    localStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify(settings)
    );
}


// =========================================
// Clear Data
// =========================================

export function clearTransactions() {

    localStorage.removeItem(TRANSACTION_KEY);
}


export function resetApplication() {

    localStorage.removeItem(TRANSACTION_KEY);
    localStorage.removeItem(BUDGET_KEY);
    localStorage.removeItem(SETTINGS_KEY);
}