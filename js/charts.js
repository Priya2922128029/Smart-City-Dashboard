// ========================================
// CHART.JS CONFIGURATIONS
// ========================================

let chartInstances = {};

// Chart.js default configuration
Chart.defaults.color = '#a0aec0';
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';
Chart.defaults.font.family = "'Inter', sans-serif";

// ========================================
// OVERVIEW PAGE CHARTS
// ========================================
function initOverviewChart() {
    const ctx = document.getElementById('overviewChart');
    if (!ctx) return;

    if (chartInstances.overview) {
        chartInstances.overview.destroy();
    }

    chartInstances.overview = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
            datasets: [
                {
                    label: 'Power (GW)',
                    data: [1.8, 2.4, 2.2, 2.1, 2.8, 2.4],
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Water (ML)',
                    data: [180, 220, 245, 230, 250, 210],
                    borderColor: '#00ff88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ========================================
// TRANSPORT PAGE CHARTS
// ========================================
function initTransportChart() {
    const ctx = document.getElementById('transportChart');
    if (!ctx) return;

    if (chartInstances.transport) {
        chartInstances.transport.destroy();
    }

    chartInstances.transport = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: cityData.transport.usage.labels,
            datasets: [
                {
                    label: 'Buses',
                    data: cityData.transport.usage.buses,
                    backgroundColor: 'rgba(0, 212, 255, 0.7)',
                    borderColor: '#00d4ff',
                    borderWidth: 1
                },
                {
                    label: 'Metro',
                    data: cityData.transport.usage.metro,
                    backgroundColor: 'rgba(0, 255, 136, 0.7)',
                    borderColor: '#00ff88',
                    borderWidth: 1
                },
                {
                    label: 'Trains',
                    data: cityData.transport.usage.trains,
                    backgroundColor: 'rgba(184, 79, 255, 0.7)',
                    borderColor: '#b84fff',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    title: {
                        display: true,
                        text: 'Passengers'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ========================================
// ENERGY PAGE CHARTS
// ========================================
function initEnergyCharts() {
    // Pie Chart
    const pieCtx = document.getElementById('energyPieChart');
    if (pieCtx) {
        if (chartInstances.energyPie) {
            chartInstances.energyPie.destroy();
        }

        chartInstances.energyPie = new Chart(pieCtx, {
            type: 'doughnut',
            data: {
                labels: ['Residential', 'Commercial', 'Industrial', 'Public'],
                datasets: [{
                    data: [
                        cityData.energy.breakdown.residential,
                        cityData.energy.breakdown.commercial,
                        cityData.energy.breakdown.industrial,
                        cityData.energy.breakdown.public
                    ],
                    backgroundColor: [
                        'rgba(0, 212, 255, 0.8)',
                        'rgba(0, 255, 136, 0.8)',
                        'rgba(255, 107, 53, 0.8)',
                        'rgba(184, 79, 255, 0.8)'
                    ],
                    borderColor: [
                        '#00d4ff',
                        '#00ff88',
                        '#ff6b35',
                        '#b84fff'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Line Chart
    const lineCtx = document.getElementById('energyLineChart');
    if (lineCtx) {
        if (chartInstances.energyLine) {
            chartInstances.energyLine.destroy();
        }

        chartInstances.energyLine = new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
                datasets: [{
                    label: 'Energy Usage (GW)',
                    data: cityData.energy.hourlyUsage,
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#00d4ff',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 3
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
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        title: {
                            display: true,
                            text: 'GW'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// ========================================
// WATER PAGE CHARTS
// ========================================
function initWaterCharts() {
    // Gauge Chart (using doughnut)
    const gaugeCtx = document.getElementById('waterGauge');
    if (gaugeCtx) {
        if (chartInstances.waterGauge) {
            chartInstances.waterGauge.destroy();
        }

        const waterLevel = cityData.water.tankLevel;
        chartInstances.waterGauge = new Chart(gaugeCtx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [waterLevel, 100 - waterLevel],
                    backgroundColor: [
                        'rgba(0, 212, 255, 0.8)',
                        'rgba(255, 255, 255, 0.1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                circumference: 180,
                rotation: 270,
                cutout: '75%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });
    }

    // Zone Usage Chart
    const zoneCtx = document.getElementById('waterZoneChart');
    if (zoneCtx) {
        if (chartInstances.waterZone) {
            chartInstances.waterZone.destroy();
        }

        chartInstances.waterZone = new Chart(zoneCtx, {
            type: 'bar',
            data: {
                labels: cityData.water.zoneUsage.labels,
                datasets: [{
                    label: 'Water Usage (ML)',
                    data: cityData.water.zoneUsage.values,
                    backgroundColor: 'rgba(0, 212, 255, 0.7)',
                    borderColor: '#00d4ff',
                    borderWidth: 1
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
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// ========================================
// POLLUTION PAGE CHARTS
// ========================================
function initPollutionCharts() {
    // AQI Gauge
    const aqiCtx = document.getElementById('aqiGauge');
    if (aqiCtx) {
        if (chartInstances.aqiGauge) {
            chartInstances.aqiGauge.destroy();
        }

        const aqi = cityData.pollution.aqi;
        const maxAqi = 500;
        chartInstances.aqiGauge = new Chart(aqiCtx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [aqi, maxAqi - aqi],
                    backgroundColor: [
                        aqi <= 50 ? 'rgba(0, 255, 136, 0.8)' :
                            aqi <= 100 ? 'rgba(255, 211, 61, 0.8)' :
                                aqi <= 150 ? 'rgba(255, 107, 53, 0.8)' :
                                    'rgba(255, 56, 56, 0.8)',
                        'rgba(255, 255, 255, 0.1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                circumference: 180,
                rotation: 270,
                cutout: '75%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });
    }

    // Zone Pollution Chart
    const zoneCtx = document.getElementById('pollutionZoneChart');
    if (zoneCtx) {
        if (chartInstances.pollutionZone) {
            chartInstances.pollutionZone.destroy();
        }

        chartInstances.pollutionZone = new Chart(zoneCtx, {
            type: 'bar',
            data: {
                labels: cityData.pollution.zones.labels,
                datasets: [{
                    label: 'AQI',
                    data: cityData.pollution.zones.values,
                    backgroundColor: cityData.pollution.zones.values.map(val =>
                        val <= 50 ? 'rgba(0, 255, 136, 0.7)' :
                            val <= 100 ? 'rgba(255, 211, 61, 0.7)' :
                                'rgba(255, 107, 53, 0.7)'
                    ),
                    borderWidth: 0
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
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// ========================================
// EMERGENCY PAGE CHARTS
// ========================================
function initEmergencyChart() {
    const ctx = document.getElementById('emergencyChart');
    if (!ctx) return;

    if (chartInstances.emergency) {
        chartInstances.emergency.destroy();
    }

    chartInstances.emergency = new Chart(ctx, {
        type: 'line',
        data: {
            labels: cityData.emergency.responseTrends.labels,
            datasets: [
                {
                    label: 'Police',
                    data: cityData.emergency.responseTrends.police,
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Fire',
                    data: cityData.emergency.responseTrends.fire,
                    borderColor: '#ff6b35',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    tension: 0.4
                },
                {
                    label: 'Ambulance',
                    data: cityData.emergency.responseTrends.ambulance,
                    borderColor: '#00ff88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    title: {
                        display: true,
                        text: 'Response Time (minutes)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ========================================
// FEEDBACK PAGE CHARTS
// ========================================
function initFeedbackChart() {
    const ctx = document.getElementById('feedbackChart');
    if (!ctx) return;

    if (chartInstances.feedback) {
        chartInstances.feedback.destroy();
    }

    const stats = getFeedbackStats();

    chartInstances.feedback = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(stats).map(key => key.charAt(0).toUpperCase() + key.slice(1)),
            datasets: [{
                data: Object.values(stats),
                backgroundColor: [
                    'rgba(0, 212, 255, 0.8)',
                    'rgba(0, 255, 136, 0.8)',
                    'rgba(255, 107, 53, 0.8)',
                    'rgba(184, 79, 255, 0.8)',
                    'rgba(255, 211, 61, 0.8)',
                    'rgba(255, 56, 56, 0.8)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// ========================================
// ANALYTICS PAGE CHARTS
// ========================================
function initAnalyticsChart() {
    const ctx = document.getElementById('analyticsChart');
    if (!ctx) return;

    if (chartInstances.analytics) {
        chartInstances.analytics.destroy();
    }

    chartInstances.analytics = new Chart(ctx, {
        type: 'line',
        data: {
            labels: cityData.analytics.monthlyComparison.labels,
            datasets: [
                {
                    label: 'Energy Efficiency',
                    data: cityData.analytics.monthlyComparison.energy,
                    borderColor: '#00d4ff',
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Water Conservation',
                    data: cityData.analytics.monthlyComparison.water,
                    borderColor: '#00ff88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Transport Efficiency',
                    data: cityData.analytics.monthlyComparison.transport,
                    borderColor: '#b84fff',
                    backgroundColor: 'rgba(184, 79, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Emergency Response',
                    data: cityData.analytics.monthlyComparison.emergency,
                    borderColor: '#ff6b35',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    title: {
                        display: true,
                        text: 'Efficiency %'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Initialize all charts
function initAllCharts() {
    initOverviewChart();
    initTransportChart();
    initEnergyCharts();
    initWaterCharts();
    initPollutionCharts();
    initEmergencyChart();
    initFeedbackChart();
    initAnalyticsChart();
}
