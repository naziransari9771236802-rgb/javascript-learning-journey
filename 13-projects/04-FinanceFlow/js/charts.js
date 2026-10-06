// =========================================
// FinanceFlow - Charts
// =========================================

let incomeExpenseChart = null;
let expenseCategoryChart = null;
let monthlyReportChart = null;
let reportCategoryChart = null;


// =========================================
// Income vs Expense Chart
// =========================================

export function renderIncomeExpenseChart(
    transactions
) {

    const canvas =
        document.querySelector(
            "#incomeExpenseChart"
        );


    if (!canvas || typeof Chart === "undefined") {
        return;
    }


    if (incomeExpenseChart) {
        incomeExpenseChart.destroy();
    }


    let income = 0;
    let expense = 0;


    transactions.forEach(transaction => {

        if (transaction.type === "income") {
            income += Number(transaction.amount);
        }

        if (transaction.type === "expense") {
            expense += Number(transaction.amount);
        }

    });


    incomeExpenseChart =
        new Chart(canvas, {

            type: "bar",

            data: {

                labels: [
                    "Income",
                    "Expense"
                ],

                datasets: [
                    {
                        label: "Amount",

                        data: [
                            income,
                            expense
                        ],

                        borderWidth: 1
                    }
                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    }

                },

                scales: {

                    y: {
                        beginAtZero: true
                    }

                }

            }

        });
}


// =========================================
// Expense Category Chart
// =========================================

export function renderExpenseCategoryChart(
    transactions
) {

    const canvas =
        document.querySelector(
            "#expenseCategoryChart"
        );


    if (!canvas || typeof Chart === "undefined") {
        return;
    }


    if (expenseCategoryChart) {
        expenseCategoryChart.destroy();
    }


    const categoryTotals = {};


    transactions
        .filter(
            transaction =>
                transaction.type === "expense"
        )
        .forEach(transaction => {

            const category =
                transaction.category;

            categoryTotals[category] =
                (categoryTotals[category] || 0)
                +
                Number(transaction.amount);

        });


    const labels =
        Object.keys(categoryTotals);


    const values =
        Object.values(categoryTotals);


    if (labels.length === 0) {
        return;
    }


    expenseCategoryChart =
        new Chart(canvas, {

            type: "doughnut",

            data: {

                labels,

                datasets: [
                    {
                        data: values,

                        borderWidth: 2
                    }
                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        position: "bottom"
                    }

                }

            }

        });
}


// =========================================
// Monthly Report Chart
// =========================================

export function renderMonthlyReportChart(
    transactions
) {

    const canvas =
        document.querySelector(
            "#monthlyReportChart"
        );


    if (!canvas || typeof Chart === "undefined") {
        return;
    }


    if (monthlyReportChart) {
        monthlyReportChart.destroy();
    }


    const monthlyData = {};


    transactions.forEach(transaction => {

        const month =
            transaction.date.substring(0, 7);


        if (!monthlyData[month]) {

            monthlyData[month] = {
                income: 0,
                expense: 0
            };

        }


        if (transaction.type === "income") {

            monthlyData[month].income +=
                Number(transaction.amount);

        } else {

            monthlyData[month].expense +=
                Number(transaction.amount);

        }

    });


    const months =
        Object.keys(monthlyData).sort();


    const incomeData =
        months.map(
            month =>
                monthlyData[month].income
        );


    const expenseData =
        months.map(
            month =>
                monthlyData[month].expense
        );


    monthlyReportChart =
        new Chart(canvas, {

            type: "line",

            data: {

                labels: months,

                datasets: [

                    {
                        label: "Income",

                        data: incomeData,

                        tension: 0.3,

                        borderWidth: 2
                    },

                    {
                        label: "Expense",

                        data: expenseData,

                        tension: 0.3,

                        borderWidth: 2
                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                scales: {

                    y: {
                        beginAtZero: true
                    }

                }

            }

        });
}


// =========================================
// Report Category Chart
// =========================================

export function renderReportCategoryChart(
    transactions
) {

    const canvas =
        document.querySelector(
            "#reportCategoryChart"
        );


    if (!canvas || typeof Chart === "undefined") {
        return;
    }


    if (reportCategoryChart) {
        reportCategoryChart.destroy();
    }


    const categoryTotals = {};


    transactions
        .filter(
            transaction =>
                transaction.type === "expense"
        )
        .forEach(transaction => {

            categoryTotals[
                transaction.category
            ] =
                (
                    categoryTotals[
                        transaction.category
                    ] || 0
                )
                +
                Number(transaction.amount);

        });


    const labels =
        Object.keys(categoryTotals);


    const values =
        Object.values(categoryTotals);


    if (!labels.length) {
        return;
    }


    reportCategoryChart =
        new Chart(canvas, {

            type: "pie",

            data: {

                labels,

                datasets: [
                    {
                        data: values,

                        borderWidth: 2
                    }
                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        position: "bottom"
                    }

                }

            }

        });
}