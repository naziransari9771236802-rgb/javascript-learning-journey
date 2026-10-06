// =========================================
// FinanceFlow - Default Data
// =========================================

export const categories = [
    "Food",
    "Shopping",
    "Transport",
    "Bills",
    "Entertainment",
    "Health",
    "Education",
    "Salary",
    "Freelance",
    "Other"
];

export const defaultTransactions = [
    {
        id: 1,
        title: "Monthly Salary",
        amount: 30000,
        type: "income",
        category: "Salary",
        date: "2026-10-01",
        note: "Monthly salary"
    },
    {
        id: 2,
        title: "Grocery Shopping",
        amount: 2500,
        type: "expense",
        category: "Food",
        date: "2026-10-02",
        note: "Monthly groceries"
    },
    {
        id: 3,
        title: "Internet Bill",
        amount: 799,
        type: "expense",
        category: "Bills",
        date: "2026-10-03",
        note: "Internet recharge"
    },
    {
        id: 4,
        title: "Freelance Work",
        amount: 5000,
        type: "income",
        category: "Freelance",
        date: "2026-10-04",
        note: "Website project"
    }
];

export const defaultBudgets = [
    {
        id: 1,
        category: "Food",
        amount: 5000
    },
    {
        id: 2,
        category: "Shopping",
        amount: 4000
    },
    {
        id: 3,
        category: "Transport",
        amount: 2500
    },
    {
        id: 4,
        category: "Entertainment",
        amount: 2000
    }
];