/* =========================================================
   EVENTHUB - CHARTS
   ========================================================= */


/* =========================================================
   INITIALIZE CHARTS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeCharts();

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeCharts() {

    createCategoryChart();

    createRevenueChart();

    createBookingChart();

}


/* =========================================================
   CATEGORY CHART
   ========================================================= */

function createCategoryChart() {

    const canvas =
        document.querySelector(
            "#categoryChart"
        );


    if (!canvas) {
        return;
    }


    if (
        typeof Chart ===
        "undefined"
    ) {

        console.warn(
            "Chart.js is not loaded."
        );

        return;

    }


    const categoryNames =
        categoriesData.map(
            category =>
                category.name
        );


    const categoryCounts =
        categoryNames.map(
            category =>
                eventsData.filter(
                    event =>
                        event.category ===
                        category
                ).length
        );


    new Chart(
        canvas,
        {

            type: "doughnut",

            data: {

                labels:
                    categoryNames,

                datasets: [

                    {

                        data:
                            categoryCounts,

                        borderWidth: 2

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        position:
                            "bottom"

                    }

                }

            }

        }
    );

}


/* =========================================================
   REVENUE CHART
   ========================================================= */

function createRevenueChart() {

    const canvas =
        document.querySelector(
            "#revenueChart"
        );


    if (!canvas) {
        return;
    }


    if (
        typeof Chart ===
        "undefined"
    ) {

        console.warn(
            "Chart.js is not loaded."
        );

        return;

    }


    const labels =
        eventsData.map(
            event =>
                event.title.length > 12
                    ? event.title.substring(
                        0,
                        12
                    ) + "..."
                    : event.title
        );


    const revenue =
        eventsData.map(
            event =>
                event.price *
                event.attendees
        );


    new Chart(
        canvas,
        {

            type: "bar",

            data: {

                labels:
                    labels,

                datasets: [

                    {

                        label:
                            "Estimated Revenue",

                        data:
                            revenue,

                        borderWidth: 1

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                scales: {

                    y: {

                        beginAtZero:
                            true,

                        ticks: {

                            callback:
                                value =>
                                    "₹" +
                                    Number(
                                        value
                                    ).toLocaleString(
                                        "en-IN"
                                    )

                        }

                    }

                }

            }

        }
    );

}


/* =========================================================
   BOOKING CHART
   ========================================================= */

function createBookingChart() {

    const canvas =
        document.querySelector(
            "#bookingChart"
        );


    if (!canvas) {
        return;
    }


    if (
        typeof Chart ===
        "undefined"
    ) {

        console.warn(
            "Chart.js is not loaded."
        );

        return;

    }


    const bookings =
        typeof getBookings ===
        "function"
            ? getBookings()
            : [];


    const confirmed =
        bookings.filter(
            booking =>
                booking.status ===
                "Confirmed"
        ).length;


    const cancelled =
        bookings.filter(
            booking =>
                booking.status ===
                "Cancelled"
        ).length;


    new Chart(
        canvas,
        {

            type: "pie",

            data: {

                labels: [

                    "Confirmed",

                    "Cancelled"

                ],

                datasets: [

                    {

                        data: [

                            confirmed,

                            cancelled

                        ],

                        borderWidth: 2

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        position:
                            "bottom"

                    }

                }

            }

        }
    );

}


/* =========================================================
   UPDATE CHARTS
   ========================================================= */

function updateCharts() {

    /*
     * Re-create charts when the page
     * data changes.
     *
     * This function can be called
     * after adding/deleting data.
     */

    initializeCharts();

}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.initializeCharts =
    initializeCharts;

window.createCategoryChart =
    createCategoryChart;

window.createRevenueChart =
    createRevenueChart;

window.createBookingChart =
    createBookingChart;

window.updateCharts =
    updateCharts;