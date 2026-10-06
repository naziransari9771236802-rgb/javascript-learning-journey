// =========================================
// FinanceFlow - Transactions
// =========================================

import {
    getTransactions,
    saveTransactions
} from "./storage.js";

import {
    formatCurrency,
    formatDate,
    generateId,
    getCategoryIcon,
    showNotification,
    escapeHTML
} from "./utils.js";


let transactions = [];
let editingId = null;


// =========================================
// Initialize
// =========================================

export function initializeTransactions() {

    transactions = getTransactions();

    setupTransactionModal();
    setupTransactionForm();
    setupTransactionFilters();

    renderTransactions();
}


// =========================================
// Modal
// =========================================

function setupTransactionModal() {

    const openButtons =
        document.querySelectorAll(
            "#openTransactionBtn"
        );

    const modal =
        document.querySelector(
            "#transactionModal"
        );

    const closeButton =
        document.querySelector(
            "#closeTransactionBtn"
        );

    if (!modal) {
        return;
    }


    openButtons.forEach(button => {

        button.addEventListener("click", () => {

            editingId = null;

            resetForm();

            modal.classList.add("show");

        });

    });


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            () => {

                modal.classList.remove("show");

            }
        );

    }


    modal.addEventListener("click", event => {

        if (event.target === modal) {

            modal.classList.remove("show");

        }

    });
}


// =========================================
// Form
// =========================================

function setupTransactionForm() {

    const form =
        document.querySelector(
            "#transactionForm"
        );

    if (!form) {
        return;
    }


    const dateInput =
        document.querySelector(
            "#transactionDate"
        );


    if (dateInput && !dateInput.value) {

        dateInput.value =
            new Date()
                .toISOString()
                .split("T")[0];

    }


    form.addEventListener(
        "submit",
        handleTransactionSubmit
    );
}


function handleTransactionSubmit(event) {

    event.preventDefault();


    const title =
        document.querySelector(
            "#transactionTitle"
        ).value.trim();


    const amount =
        Number(
            document.querySelector(
                "#transactionAmount"
            ).value
        );


    const type =
        document.querySelector(
            "#transactionType"
        ).value;


    const category =
        document.querySelector(
            "#transactionCategory"
        ).value;


    const date =
        document.querySelector(
            "#transactionDate"
        ).value;


    const note =
        document.querySelector(
            "#transactionNote"
        ).value.trim();


    if (!title || amount <= 0 || !date) {

        showNotification(
            "Please fill all required fields.",
            "error"
        );

        return;
    }


    const transaction = {

        id: editingId || generateId(),

        title,

        amount,

        type,

        category,

        date,

        note

    };


    if (editingId) {

        transactions =
            transactions.map(item =>

                item.id === editingId
                    ? transaction
                    : item

            );

        showNotification(
            "Transaction updated successfully."
        );

    } else {

        transactions.unshift(
            transaction
        );

        showNotification(
            "Transaction added successfully."
        );

    }


    saveTransactions(transactions);

    resetForm();

    document
        .querySelector("#transactionModal")
        ?.classList.remove("show");

    renderTransactions();
}


// =========================================
// Reset Form
// =========================================

function resetForm() {

    const form =
        document.querySelector(
            "#transactionForm"
        );

    if (!form) {
        return;
    }

    form.reset();

    editingId = null;


    const dateInput =
        document.querySelector(
            "#transactionDate"
        );


    if (dateInput) {

        dateInput.value =
            new Date()
                .toISOString()
                .split("T")[0];

    }
}


// =========================================
// Filters
// =========================================

function setupTransactionFilters() {

    const search =
        document.querySelector(
            "#transactionSearch"
        );

    const type =
        document.querySelector(
            "#typeFilter"
        );

    const category =
        document.querySelector(
            "#categoryFilter"
        );

    const sort =
        document.querySelector(
            "#sortTransactions"
        );


    [search, type, category, sort]
        .filter(Boolean)
        .forEach(element => {

            element.addEventListener(
                "input",
                renderTransactions
            );

            element.addEventListener(
                "change",
                renderTransactions
            );

        });
}


// =========================================
// Get Filtered Transactions
// =========================================

function getFilteredTransactions() {

    let result = [...transactions];


    const search =
        document.querySelector(
            "#transactionSearch"
        )?.value
            .toLowerCase()
            .trim();


    const type =
        document.querySelector(
            "#typeFilter"
        )?.value;


    const category =
        document.querySelector(
            "#categoryFilter"
        )?.value;


    const sort =
        document.querySelector(
            "#sortTransactions"
        )?.value;


    if (search) {

        result = result.filter(item =>

            item.title
                .toLowerCase()
                .includes(search)

            ||

            item.category
                .toLowerCase()
                .includes(search)

            ||

            item.note
                ?.toLowerCase()
                .includes(search)

        );

    }


    if (type && type !== "all") {

        result = result.filter(
            item => item.type === type
        );

    }


    if (category && category !== "all") {

        result = result.filter(
            item => item.category === category
        );

    }


    if (sort === "newest") {

        result.sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );

    }


    if (sort === "oldest") {

        result.sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        );

    }


    if (sort === "high") {

        result.sort(
            (a, b) =>
                Number(b.amount) -
                Number(a.amount)
        );

    }


    if (sort === "low") {

        result.sort(
            (a, b) =>
                Number(a.amount) -
                Number(b.amount)
        );

    }


    return result;
}


// =========================================
// Render
// =========================================

export function renderTransactions() {

    const tbody =
        document.querySelector(
            "#transactionsTableBody"
        );


    if (!tbody) {
        return;
    }


    const result =
        getFilteredTransactions();


    const summary =
        document.querySelector(
            "#transactionSummary"
        );


    if (summary) {

        summary.textContent =
            `${result.length} transaction${result.length !== 1 ? "s" : ""}`;

    }


    if (result.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="empty-state">
                    No transactions found.
                </td>
            </tr>
        `;

        return;
    }


    tbody.innerHTML =
        result.map(transaction => {

            const sign =
                transaction.type === "income"
                    ? "+"
                    : "-";


            return `

                <tr>

                    <td>

                        <div class="transaction-info">

                            <div class="transaction-icon-box">
                                ${getCategoryIcon(transaction.category)}
                            </div>

                            <div>

                                <div class="transaction-title">
                                    ${escapeHTML(transaction.title)}
                                </div>

                                ${
                                    transaction.note
                                        ? `
                                        <div class="transaction-note">
                                            ${escapeHTML(transaction.note)}
                                        </div>
                                        `
                                        : ""
                                }

                            </div>

                        </div>

                    </td>


                    <td>
                        <span class="category-badge">
                            ${escapeHTML(transaction.category)}
                        </span>
                    </td>


                    <td>
                        ${formatDate(transaction.date)}
                    </td>


                    <td>

                        <span
                            class="type-badge ${
                                transaction.type === "income"
                                    ? "type-income"
                                    : "type-expense"
                            }"
                        >
                            ${
                                transaction.type === "income"
                                    ? "Income"
                                    : "Expense"
                            }
                        </span>

                    </td>


                    <td
                        class="${
                            transaction.type === "income"
                                ? "amount-income"
                                : "amount-expense"
                        }"
                    >
                        ${sign}${formatCurrency(transaction.amount)}
                    </td>


                    <td>

                        <div class="action-buttons">

                            <button
                                class="action-btn"
                                data-action="edit"
                                data-id="${transaction.id}"
                                title="Edit"
                            >
                                ✏️
                            </button>

                            <button
                                class="action-btn delete-btn"
                                data-action="delete"
                                data-id="${transaction.id}"
                                title="Delete"
                            >
                                🗑️
                            </button>

                        </div>

                    </td>

                </tr>

            `;

        }).join("");


    setupActionButtons();
}


// =========================================
// Edit / Delete
// =========================================

function setupActionButtons() {

    document
        .querySelectorAll("[data-action]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const action =
                        button.dataset.action;

                    const id =
                        Number(button.dataset.id);


                    if (action === "edit") {

                        editTransaction(id);

                    }


                    if (action === "delete") {

                        deleteTransaction(id);

                    }

                }
            );

        });
}


// =========================================
// Edit
// =========================================

function editTransaction(id) {

    const transaction =
        transactions.find(
            item => item.id === id
        );


    if (!transaction) {
        return;
    }


    editingId = id;


    document.querySelector(
        "#transactionTitle"
    ).value = transaction.title;


    document.querySelector(
        "#transactionAmount"
    ).value = transaction.amount;


    document.querySelector(
        "#transactionType"
    ).value = transaction.type;


    document.querySelector(
        "#transactionCategory"
    ).value = transaction.category;


    document.querySelector(
        "#transactionDate"
    ).value = transaction.date;


    document.querySelector(
        "#transactionNote"
    ).value = transaction.note || "";


    document
        .querySelector("#transactionModal")
        ?.classList.add("show");
}


// =========================================
// Delete
// =========================================

function deleteTransaction(id) {

    const transaction =
        transactions.find(
            item => item.id === id
        );


    if (!transaction) {
        return;
    }


    const confirmed =
        confirm(
            `Delete "${transaction.title}"?`
        );


    if (!confirmed) {
        return;
    }


    transactions =
        transactions.filter(
            item => item.id !== id
        );


    saveTransactions(transactions);

    renderTransactions();


    showNotification(
        "Transaction deleted successfully."
    );
}


// =========================================
// Export
// =========================================

export function getAllTransactions() {

    return [...transactions];
}