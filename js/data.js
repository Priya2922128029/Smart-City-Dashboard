// ========================================
// DUMMY DATA FOR SMART CITY DASHBOARD
// ========================================

const cityData = {
    // KPI Metrics
    kpis: {
        aqi: 42,
        powerConsumption: '2.4 GW',
        waterLevel: 78,
        activeAlerts: 5
    },

    // Transport Data
    transport: {
        buses: {
            total: 156,
            onTime: 142,
            delayed: 14
        },
        metro: {
            total: 8,
            onTime: 7,
            delayed: 1
        },
        trains: {
            total: 24,
            onTime: 22,
            delayed: 2
        },
        usage: {
            labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
            buses: [2400, 5600, 4200, 3800, 6200, 3200],
            metro: [1800, 4200, 3100, 2800, 4800, 2400],
            trains: [1200, 2800, 2100, 1900, 3200, 1600]
        }
    },

    // Energy Data
    energy: {
        total: 2.4,
        renewable: 42,
        peakLoad: 3.1,
        breakdown: {
            residential: 45,
            commercial: 35,
            industrial: 15,
            public: 5
        },
        hourlyUsage: [1.8, 1.6, 1.5, 1.4, 1.6, 2.0, 2.4, 2.6, 2.3, 2.1, 2.2, 2.4, 2.5, 2.3, 2.2, 2.4, 2.8, 3.1, 2.9, 2.6, 2.4, 2.2, 2.0, 1.9]
    },

    // Water Data
    water: {
        tankLevel: 78,
        dailyConsumption: 245,
        leaks: 3,
        efficiency: 92,
        zoneUsage: {
            labels: ['North', 'South', 'East', 'West', 'Central'],
            values: [52, 48, 55, 45, 50]
        }
    },

    // Pollution Data
    pollution: {
        aqi: 42,
        pm25: 28,
        co2: 385,
        no2: 18,
        o3: 32,
        zones: {
            labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'],
            values: [38, 45, 42, 50, 35]
        }
    },

    // Weather Data
    weather: {
        current: {
            temp: 24,
            condition: 'Partly Cloudy',
            humidity: 65,
            windSpeed: 12,
            icon: '☀️'
        },
        hourly: [
            { time: '12 PM', temp: 26, icon: '☀️' },
            { time: '3 PM', temp: 28, icon: '⛅' },
            { time: '6 PM', temp: 25, icon: '🌤️' },
            { time: '9 PM', temp: 22, icon: '🌙' }
        ],
        weekly: [
            { day: 'Monday', high: 28, low: 20, icon: '☀️' },
            { day: 'Tuesday', high: 26, low: 19, icon: '⛅' },
            { day: 'Wednesday', high: 22, low: 17, icon: '🌧️' },
            { day: 'Thursday', high: 25, low: 18, icon: '🌤️' }
        ]
    },

    // Emergency Services
    emergency: {
        police: {
            total: 24,
            available: 18,
            busy: 6,
            avgResponse: 4.2
        },
        fire: {
            total: 16,
            available: 14,
            busy: 2,
            avgResponse: 3.8
        },
        ambulance: {
            total: 32,
            available: 22,
            busy: 10,
            avgResponse: 5.1
        },
        activeEmergencies: 3,
        responseTrends: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            police: [4.5, 4.3, 4.2, 4.1, 4.2, 4.2],
            fire: [4.0, 3.9, 3.8, 3.7, 3.8, 3.8],
            ambulance: [5.5, 5.3, 5.2, 5.1, 5.0, 5.1]
        }
    },

    // Alerts
    alerts: [
        {
            id: 1,
            type: 'Traffic',
            title: 'Heavy traffic on Highway 5',
            description: 'Accident reported, expect delays',
            priority: 'high',
            timestamp: '10 minutes ago',
            read: false
        },
        {
            id: 2,
            type: 'Power',
            title: 'Power outage in Zone 3',
            description: 'Maintenance crew dispatched',
            priority: 'medium',
            timestamp: '25 minutes ago',
            read: false
        },
        {
            id: 3,
            type: 'Weather',
            title: 'Heavy rain warning',
            description: 'Expected between 6-9 PM',
            priority: 'medium',
            timestamp: '1 hour ago',
            read: true
        },
        {
            id: 4,
            type: 'Water',
            title: 'Leak detected in North Zone',
            description: 'Repair scheduled for tomorrow',
            priority: 'low',
            timestamp: '2 hours ago',
            read: true
        },
        {
            id: 5,
            type: 'Transport',
            title: 'Metro Line 4 delayed',
            description: 'Technical issue, 15 min delay',
            priority: 'high',
            timestamp: '3 hours ago',
            read: false
        }
    ],

    // Analytics
    analytics: {
        cityHealthScore: 87,
        efficiency: 92,
        satisfaction: 4.2,
        costSavings: 2.4,
        monthlyComparison: {
            labels: ['Oct', 'Nov', 'Dec', 'Jan'],
            energy: [85, 88, 90, 92],
            water: [82, 84, 86, 88],
            transport: [88, 89, 90, 91],
            emergency: [94, 95, 95, 96]
        }
    }
};

// Initialize feedback from localStorage or use default
let feedbackData = JSON.parse(localStorage.getItem('cityFeedback')) || [
    {
        id: 1,
        type: 'infrastructure',
        area: 'Downtown',
        description: 'Pothole on Main Street needs repair',
        status: 'pending',
        timestamp: new Date(Date.now() - 86400000).toISOString()
    },
    {
        id: 2,
        type: 'transport',
        area: 'Zone 5',
        description: 'Bus stop needs better lighting',
        status: 'in-progress',
        timestamp: new Date(Date.now() - 172800000).toISOString()
    },
    {
        id: 3,
        type: 'environment',
        area: 'Park District',
        description: 'More recycling bins needed',
        status: 'resolved',
        timestamp: new Date(Date.now() - 259200000).toISOString()
    }
];

// Save feedback to localStorage
function saveFeedback() {
    localStorage.setItem('cityFeedback', JSON.stringify(feedbackData));
}

// Get feedback statistics
function getFeedbackStats() {
    const stats = {
        infrastructure: 0,
        transport: 0,
        utilities: 0,
        environment: 0,
        safety: 0,
        other: 0
    };

    feedbackData.forEach(item => {
        if (stats.hasOwnProperty(item.type)) {
            stats[item.type]++;
        }
    });

    return stats;
}
