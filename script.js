// ============================
// PERFORMANCE OVERVIEW CHART
// ============================

const lineChartCanvas = document.getElementById("lineChart");

if (lineChartCanvas) {
    new Chart(lineChartCanvas, {
        type: "line",
        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            datasets: [{
                label: "Performance",
                data: [20, 45, 30, 60, 42, 70, 62, 90, 78, 95, 85, 100],
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59,130,246,0.15)",
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
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
                x: {
                    grid: {
                        color: "rgba(255,255,255,0.05)"
                    },
                    ticks: {
                        color: "#94a3b8"
                    }
                },

                y: {
                    grid: {
                        color: "rgba(255,255,255,0.05)"
                    },
                    ticks: {
                        color: "#94a3b8"
                    }
                }
            }
        }
    });
}


// ============================
// DOMAIN BREAKDOWN CHART
// ============================

const donutChartCanvas = document.getElementById("donutChart");

if (donutChartCanvas) {
    new Chart(donutChartCanvas, {
        type: "doughnut",

        data: {
            labels: [
                "Sports Analytics",
                "Business Analytics",
                "Data Analytics",
                "Decision Intelligence"
            ],

            datasets: [{
                data: [40, 35, 15, 10],

                backgroundColor: [
                    "#3b82f6",
                    "#06b6d4",
                    "#8b5cf6",
                    "#60a5fa"
                ],

                borderWidth: 0
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    position: "right",
                    labels: {
                        color: "#cbd5e1"
                    }
                }
            }
        }
    });
}


// ============================
// ANALYTICS ACTIVITY CHART
// ============================

const activityChartCanvas = document.getElementById("activityChart");

if (activityChartCanvas) {
    new Chart(activityChartCanvas, {
        type: "bar",

        data: {
            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"
            ],

            datasets: [{
                label: "Activity",

                data: [4, 7, 6, 9, 12, 8, 10],

                backgroundColor: [
                    "#3b82f6",
                    "#3b82f6",
                    "#3b82f6",
                    "#3b82f6",
                    "#3b82f6",
                    "#3b82f6",
                    "#3b82f6"
                ],

                borderRadius: 8
            }]
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
                x: {
                    grid: {
                        display: false
                    },

                    ticks: {
                        color: "#94a3b8"
                    }
                },

                y: {
                    grid: {
                        color: "rgba(255,255,255,0.05)"
                    },

                    ticks: {
                        color: "#94a3b8"
                    }
                }
            }
        }
    });
}


// ============================
// OPTIONAL CARD HOVER EFFECT
// ============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";
        card.style.transition = "0.3s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});
