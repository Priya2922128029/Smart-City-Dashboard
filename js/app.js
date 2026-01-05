// ========================================
// MAIN APPLICATION LOGIC
// ========================================

// ========================================
// SIDEBAR TOGGLE
// ========================================
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');

            // Save state to localStorage
            localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
        });
    }

    // Restore sidebar state
    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (isCollapsed) {
        sidebar.classList.add('collapsed');
    }
}

// ========================================
// NAVIGATION SYSTEM
// ========================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = item.getAttribute('data-page');
            navigateToPage(pageName);
        });
    });
}

function navigateToPage(pageName) {
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === pageName) {
            item.classList.add('active');
        }
    });

    // Update active page
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');

        // Initialize charts for the page if needed
        initPageCharts(pageName);
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initPageCharts(pageName) {
    switch (pageName) {
        case 'overview':
            initOverviewChart();
            break;
        case 'transport':
            initTransportChart();
            break;
        case 'energy':
            initEnergyCharts();
            break;
        case 'water':
            initWaterCharts();
            break;
        case 'pollution':
            initPollutionCharts();
            break;
        case 'emergency':
            initEmergencyChart();
            break;
        case 'feedback':
            initFeedbackChart();
            renderFeedback();
            break;
        case 'analytics':
            initAnalyticsChart();
            break;
        case 'alerts':
            renderAlerts();
            break;
    }
}

// ========================================
// LIVE CLOCK
// ========================================
function updateClock() {
    const clockEl = document.getElementById('currentTime');
    if (!clockEl) return;

    function update() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clockEl.textContent = `${hours}:${minutes}`;
    }

    update();
    setInterval(update, 1000);
}

// ========================================
// HEADER WEATHER UPDATE
// ========================================
function updateHeaderWeather() {
    const weatherEl = document.getElementById('headerWeather');
    if (weatherEl) {
        weatherEl.textContent = `${cityData.weather.current.temp}°C`;
    }
}

// ========================================
// KEYBOARD SHORTCUTS
// ========================================
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Alt + Number keys for quick navigation
        if (e.altKey && e.key >= '1' && e.key <= '9') {
            e.preventDefault();
            const pages = ['overview', 'transport', 'traffic', 'energy', 'water', 'pollution', 'weather', 'emergency', 'alerts'];
            const index = parseInt(e.key) - 1;
            if (pages[index]) {
                navigateToPage(pages[index]);
            }
        }

        // Alt + S to toggle sidebar
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            document.getElementById('sidebarToggle').click();
        }
    });
}

// ========================================
// RESPONSIVE HANDLING
// ========================================
function handleResponsive() {
    const sidebar = document.getElementById('sidebar');

    function checkWidth() {
        if (window.innerWidth < 768) {
            sidebar.classList.add('collapsed');
        }
    }

    checkWidth();
    window.addEventListener('resize', checkWidth);
}

// ========================================
// INITIALIZE APP
// ========================================
function initApp() {
    console.log('🏙️ Smart City Dashboard Initializing...');

    // Initialize core components
    initSidebar();
    initNavigation();
    updateClock();
    updateHeaderWeather();

    // Initialize interactions
    initInteractions();

    // Initialize all charts
    initAllCharts();

    // Setup keyboard shortcuts
    initKeyboardShortcuts();

    // Handle responsive
    handleResponsive();

    console.log('✅ Smart City Dashboard Ready!');

    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome to Neo Tokyo Smart City Dashboard', 'success');
    }, 500);
}

// ========================================
// START APPLICATION
// ========================================
document.addEventListener('DOMContentLoaded', initApp);

// Handle page visibility change to update clock
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        updateClock();
        updateHeaderWeather();
    }
});

// Export functions for global access
window.navigateToPage = navigateToPage;
window.markAlertAsRead = markAlertAsRead;
