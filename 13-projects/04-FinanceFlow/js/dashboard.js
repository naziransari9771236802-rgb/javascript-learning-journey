// =========================================
// FinanceFlow - Dashboard
// =========================================

import {
    getTransactions
} from "./storage.js";

import {
    formatCurrency,
    formatDate,
    calculateTotals,
    getCategoryIcon,
    escapeHTML
} from "./utils.js";

import {
    renderIncomeExpenseChart,
    renderExpenseCategoryChart
} from "./charts.js";


// =========================================
// Initialize Dashboard
// =========================================

export function initializeDashboard() {

    const transactions =
        getTransactions();


    updateSummary(transactions);

    renderRecentTransactions(
        transactions
    );

    renderIncomeExpenseChart(
        transactions
    );

    renderExpenseCategoryChart(
        transactions
    );
}


// =========================================
// Summary
// =========================================

function updateSummary(transactions) {

    const totals =
        calculateTotals(transactions);


    const balance =
        document.querySelector(
            "#totalBalance"
        );


    const income =
        document.querySelector(
            "#totalIncome"
        );


    const expense =
        document.querySelector(
            "#totalExpense"
        );


    const savings =
        document.querySelector(
            "#totalSavings"
        );


    const count =
        document.querySelector(
            "#transactionCount"
        );


    if (balance) {

        balance.textContent =
            formatCurrency(
                totals.balance
            );

    }


    if (income) {

        income.textContent =
            formatCurrency(
                totals.income
            );

    }


    if (expense) {

        expense.textContent =
            formatCurrency(
                totals.expense
            );

    }


    if (savings) {

        savings.textContent =
            formatCurrency(
                totals.savings
            );

    }


    if (count) {

        count.textContent =
            transactions.length;

    }


    const status =
        document.querySelector(
            "#balanceStatus"
        );


    if (status) {

        if (totals.balance > 0) {

            status.textContent =
                "Your finances are looking healthy.";

        } else if (totals.balance < 0) {

            status.textContent =
                "Your expenses are higher than income.";

        } else {

            status.textContent =
                "Your financial overview.";

        }

    }
}


// =========================================
// Recent Transactions
// =========================================

function renderRecentTransactions(
    transactions
) {

    const tbody =
        document.querySelector(
            "#recentTransactions"
        );


    if (!tbody) {
        return;
    }


    const recent =
        [...transactions]
            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            )
            .slice(0, 5);


    if (recent.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="empty-state">
                    No transactions yet.
                </td>
            </tr>
        `;

        return;
    }


    tbody.innerHTML =
        recent.map(transaction => {

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

                </tr>

            `;

        }).join("");
}