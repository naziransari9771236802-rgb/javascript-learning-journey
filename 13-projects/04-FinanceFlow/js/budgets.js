// =========================================
// FinanceFlow - Budgets
// =========================================

import {
    getBudgets,
    saveBudgets,
    getTransactions
} from "./storage.js";

import {
    formatCurrency,
    generateId,
    showNotification
} from "./utils.js";


let budgets = [];


// =========================================
// Initialize
// =========================================

export function initializeBudgets() {

    budgets = getBudgets();

    setupBudgetModal();

    setupBudgetForm();

    renderBudgets();

    updateBudgetSummary();
}


// =========================================
// Modal
// =========================================

function setupBudgetModal() {

    const openButton =
        document.querySelector(
            "#openBudgetBtn"
        );

    const closeButton =
        document.querySelector(
            "#closeBudgetBtn"
        );

    const modal =
        document.querySelector(
            "#budgetModal"
        );


    if (!modal) {
        return;
    }


    openButton?.addEventListener(
        "click",
        () => {

            modal.classList.add("show");

        }
    );


    closeButton?.addEventListener(
        "click",
        () => {

            modal.classList.remove("show");

        }
    );


    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {

                modal.classList.remove("show");

            }

        }
    );
}


// =========================================
// Form
// =========================================

function setupBudgetForm() {

    const form =
        document.querySelector(
            "#budgetForm"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const category =
                document.querySelector(
                    "#budgetCategory"
                ).value;


            const amount =
                Number(
                    document.querySelector(
                        "#budgetAmount"
                    ).value
                );


            if (!amount || amount <= 0) {

                showNotification(
                    "Enter a valid budget amount.",
                    "error"
                );

                return;
            }


            const existing =
                budgets.find(
                    budget =>
                        budget.category === category
                );


            if (existing) {

                existing.amount = amount;

                showNotification(
                    "Budget updated successfully."
                );

            } else {

                budgets.push({

                    id: generateId(),

                    category,

                    amount

                });


                showNotification(
                    "Budget created successfully."
                );

            }


            saveBudgets(budgets);

            form.reset();

            document
                .querySelector("#budgetModal")
                ?.classList.remove("show");

            renderBudgets();

            updateBudgetSummary();

        }
    );
}


// =========================================
// Calculate Spending
// =========================================

function getCategorySpent(category) {

    const transactions =
        getTransactions();


    return transactions

        .filter(
            transaction =>
                transaction.type === "expense"
                &&
                transaction.category === category
        )

        .reduce(
            (total, transaction) =>
                total + Number(transaction.amount),
            0
        );
}


// =========================================
// Render Budgets
// =========================================

export function renderBudgets() {

    const container =
        document.querySelector(
            "#budgetList"
        );


    if (!container) {
        return;
    }


    if (budgets.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <p>
                    No budgets created yet.
                </p>

                <small>
                    Create your first budget to start tracking.
                </small>

            </div>
        `;

        return;
    }


    container.innerHTML =
        budgets.map(budget => {

            const spent =
                getCategorySpent(
                    budget.category
                );


            const percentage =
                Math.min(
                    (spent / budget.amount) * 100,
                    100
                );


            let statusClass = "";

            let statusText =
                `${formatCurrency(
                    Math.max(
                        budget.amount - spent,
                        0
                    )
                )} remaining`;


            if (percentage >= 100) {

                statusClass = "danger";

                statusText =
                    "Budget exceeded";

            } else if (percentage >= 80) {

                statusClass = "warning";

                statusText =
                    `${formatCurrency(
                        budget.amount - spent
                    )} remaining`;

            }


            return `

                <div class="budget-item">

                    <div class="budget-top">

                        <div class="budget-name">
                            ${budget.category}
                        </div>

                        <div class="budget-values">
                            ${formatCurrency(spent)}
                            /
                            ${formatCurrency(budget.amount)}
                        </div>

                    </div>


                    <div class="progress-bar">

                        <div
                            class="progress-fill"
                            style="width: ${percentage}%"
                        ></div>

                    </div>


                    <div
                        class="budget-status ${statusClass}"
                    >

                        <span>
                            ${statusText}
                        </span>

                        <button
                            class="action-btn delete-btn"
                            data-budget-delete="${budget.id}"
                        >
                            🗑️
                        </button>

                    </div>

                </div>

            `;

        }).join("");


    document
        .querySelectorAll(
            "[data-budget-delete]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    deleteBudget(
                        Number(
                            button.dataset.budgetDelete
                        )
                    );

                }
            );

        });
}


// =========================================
// Summary
// =========================================

function updateBudgetSummary() {

    const totalBudget =
        budgets.reduce(
            (total, budget) =>
                total + Number(budget.amount),
            0
        );


    const totalSpent =
        budgets.reduce(
            (total, budget) =>
                total +
                getCategorySpent(
                    budget.category
                ),
            0
        );


    const remaining =
        totalBudget - totalSpent;


    const budgetElement =
        document.querySelector(
            "#totalBudget"
        );

    const spentElement =
        document.querySelector(
            "#budgetSpent"
        );

    const remainingElement =
        document.querySelector(
            "#budgetRemaining"
        );


    if (budgetElement) {

        budgetElement.textContent =
            formatCurrency(totalBudget);

    }


    if (spentElement) {

        spentElement.textContent =
            formatCurrency(totalSpent);

    }


    if (remainingElement) {

        remainingElement.textContent =
            formatCurrency(remaining);

    }

}


// =========================================
// Delete Budget
// =========================================

function deleteBudget(id) {

    const confirmed =
        confirm(
            "Delete this budget?"
        );


    if (!confirmed) {
        return;
    }


    budgets =
        budgets.filter(
            budget =>
                budget.id !== id
        );


    saveBudgets(budgets);

    renderBudgets();

    updateBudgetSummary();

    showNotification(
        "Budget deleted successfully."
    );
}