// ========================================
// INTERACTIVE FEATURES & USER INTERACTIONS
// ========================================

// ========================================
// ALERTS FUNCTIONALITY
// ========================================
function renderAlerts(filter = 'all') {
    const alertsList = document.getElementById('alertsList');
    if (!alertsList) return;

    let filteredAlerts = cityData.alerts;
    if (filter !== 'all') {
        filteredAlerts = cityData.alerts.filter(alert => alert.priority === filter);
    }

    alertsList.innerHTML = filteredAlerts.map(alert => `
    <div class="card" style="border-left: 3px solid ${alert.priority === 'high' ? 'var(--color-neon-red)' :
            alert.priority === 'medium' ? 'var(--color-neon-orange)' :
                'var(--color-neon-blue)'
        }; opacity: ${alert.read ? '0.6' : '1'};">
      <div class="flex" style="justify-content: space-between; align-items: flex-start;">
        <div style="flex: 1;">
          <div class="flex gap-1" style="align-items: center; margin-bottom: 0.5rem;">
            <span class="badge badge-${alert.priority === 'high' ? 'danger' :
            alert.priority === 'medium' ? 'warning' :
                'info'
        }">${alert.priority.toUpperCase()}</span>
            <span style="color: var(--color-text-muted); font-size: 0.875rem;">${alert.timestamp}</span>
          </div>
          <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">
            ${alert.type}: ${alert.title}
          </h4>
          <p style="color: var(--color-text-secondary); font-size: 0.875rem;">
            ${alert.description}
          </p>
        </div>
        <button class="btn btn-secondary" onclick="markAlertAsRead(${alert.id})" style="padding: 0.5rem 1rem; font-size: 0.875rem;">
          ${alert.read ? '✓ Read' : 'Mark as Read'}
        </button>
      </div>
    </div>
  `).join('');
}

function markAlertAsRead(alertId) {
    const alert = cityData.alerts.find(a => a.id === alertId);
    if (alert) {
        alert.read = true;
        renderAlerts();
        updateAlertCount();
    }
}

function updateAlertCount() {
    const unreadCount = cityData.alerts.filter(a => !a.read).length;
    const alertCountEl = document.getElementById('alertCount');
    if (alertCountEl) {
        alertCountEl.textContent = unreadCount;
    }

    const alertsValueEl = document.getElementById('alertsValue');
    if (alertsValueEl) {
        alertsValueEl.textContent = unreadCount;
    }
}

// ========================================
// FEEDBACK FUNCTIONALITY
// ========================================
function renderFeedback() {
    const feedbackList = document.getElementById('feedbackList');
    if (!feedbackList) return;

    const sortedFeedback = [...feedbackData].sort((a, b) =>
        new Date(b.timestamp) - new Date(a.timestamp)
    );

    feedbackList.innerHTML = sortedFeedback.slice(0, 10).map(item => {
        const date = new Date(item.timestamp);
        const timeAgo = getTimeAgo(date);

        return `
      <div class="card">
        <div class="flex" style="justify-content: space-between; align-items: flex-start;">
          <div style="flex: 1;">
            <div class="flex gap-1" style="align-items: center; margin-bottom: 0.5rem;">
              <span class="badge badge-info">${item.type}</span>
              <span class="badge badge-${item.status === 'resolved' ? 'success' :
                item.status === 'in-progress' ? 'warning' :
                    'secondary'
            }">${item.status}</span>
              <span style="color: var(--color-text-muted); font-size: 0.875rem;">${timeAgo}</span>
            </div>
            <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.25rem;">
              ${item.area}
            </h4>
            <p style="color: var(--color-text-secondary); font-size: 0.875rem;">
              ${item.description}
            </p>
          </div>
        </div>
      </div>
    `;
    }).join('');
}

function handleFeedbackSubmit(e) {
    e.preventDefault();

    const type = document.getElementById('issueType').value;
    const area = document.getElementById('issueArea').value;
    const description = document.getElementById('issueDescription').value;

    if (!area.trim() || !description.trim()) {
        alert('Please fill in all fields');
        return;
    }

    const newFeedback = {
        id: feedbackData.length + 1,
        type,
        area,
        description,
        status: 'pending',
        timestamp: new Date().toISOString()
    };

    feedbackData.unshift(newFeedback);
    saveFeedback();

    // Reset form
    document.getElementById('feedbackForm').reset();

    // Re-render
    renderFeedback();
    initFeedbackChart();

    // Show success message
    showNotification('Feedback submitted successfully!', 'success');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================
function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return 'Just now';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
    position: fixed;
    top: 90px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${type === 'success' ? 'rgba(0, 255, 136, 0.2)' :
            type === 'error' ? 'rgba(255, 56, 56, 0.2)' :
                'rgba(0, 212, 255, 0.2)'
        };
    border: 1px solid ${type === 'success' ? 'var(--color-success)' :
            type === 'error' ? 'var(--color-danger)' :
                'var(--color-info)'
        };
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// TOGGLE SWITCHES
// ========================================
function setupToggleSwitches() {
    document.querySelectorAll('.toggle-switch').forEach(switchEl => {
        const options = switchEl.querySelectorAll('.toggle-option');

        options.forEach(option => {
            option.addEventListener('click', function () {
                // Remove active from siblings
                options.forEach(opt => opt.classList.remove('active'));
                // Add active to clicked
                this.classList.add('active');

                // Handle specific toggle actions
                const parent = this.closest('.card');
                if (parent) {
                    const title = parent.querySelector('.card-title')?.textContent;

                    // Temperature toggle
                    if (title && title.includes('Weather')) {
                        toggleTemperature(this.textContent.trim());
                    }
                }
            });
        });
    });
}

function toggleTemperature(unit) {
    // This would convert temperatures - for demo, we'll just show the concept
    console.log(`Temperature unit changed to: ${unit}`);
}

// ========================================
// FILTER FUNCTIONALITY
// ========================================
function setupFilters() {
    // Alert filters
    const alertFilters = document.querySelectorAll('[data-filter]');
    alertFilters.forEach(filter => {
        filter.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');
            renderAlerts(filterValue);
        });
    });
}

// ========================================
// MODAL SYSTEM
// ========================================
function createModal(title, content) {
    const modal = document.createElement('div');
    modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease-out;
  `;

    modal.innerHTML = `
    <div class="card" style="max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto;">
      <div class="card-header">
        <h3 class="card-title">${title}</h3>
        <button class="btn btn-secondary" onclick="this.closest('[style*=fixed]').remove()" style="padding: 0.5rem 1rem;">
          ✕
        </button>
      </div>
      <div class="card-body">
        ${content}
      </div>
    </div>
  `;

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.remove();
        }
    });

    document.body.appendChild(modal);
}

// ========================================
// ANIMATED COUNTERS
// ========================================
function animateCounter(element, target, duration = 1000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// INITIALIZE INTERACTIONS
// ========================================
function initInteractions() {
    // Setup feedback form
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    }

    // Setup toggle switches
    setupToggleSwitches();

    // Setup filters
    setupFilters();

    // Render initial data
    renderAlerts();
    renderFeedback();
    updateAlertCount();

    // Alert badge click
    const alertBadge = document.getElementById('alertBadge');
    if (alertBadge) {
        alertBadge.addEventListener('click', () => {
            navigateToPage('alerts');
        });
    }
}
