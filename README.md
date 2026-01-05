# 🏙️ Smart City Dashboard

A modern, professional web application for monitoring and managing smart city operations in real-time. Features a unique collapsible sidebar, professional header with live widgets, and 11 interactive pages displaying city metrics through beautiful charts and visualizations.

![Dashboard Preview](https://img.shields.io/badge/Status-Ready-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-blue?style=for-the-badge)

## ✨ Features

### 🎨 Unique Design
- **Collapsible Sidebar**: Icon-first navigation with smooth animations and neon gradient border
- **Professional Header**: Live clock, weather widget, and animated alert badge
- **Dark Theme**: Navy/charcoal base with vibrant neon accents (blue, green, orange, red)
- **Glassmorphism**: Modern card designs with backdrop blur effects
- **Smooth Animations**: Micro-interactions and transitions throughout

### 📊 11 Interactive Pages
1. **City Overview** - KPI cards, city map, and trend charts
2. **Transport** - Bus, metro, and train operations monitoring
3. **Traffic Map** - Color-coded traffic visualization
4. **Energy Usage** - Consumption breakdown and hourly trends
5. **Water Usage** - Tank levels and zone consumption
6. **Pollution Monitor** - AQI gauge and pollutant tracking
7. **Weather** - Current conditions and 7-day forecast
8. **Emergency Services** - Police, fire, ambulance status
9. **Alerts & Notifications** - Filterable alert system
10. **Citizen Feedback** - Community feedback with localStorage
11. **Analytics** - Performance insights and trends

### 🚀 Interactive Features
- **Chart.js Integration**: 11+ responsive charts with custom styling
- **localStorage**: Persists sidebar state and citizen feedback
- **Live Updates**: Real-time clock in header
- **Keyboard Shortcuts**: Alt+1-9 for navigation, Alt+S for sidebar toggle
- **Toast Notifications**: Success/error messages with auto-dismiss
- **Responsive Design**: Works on mobile, tablet, and desktop

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, animations
- **Vanilla JavaScript** - No framework dependencies
- **Chart.js 4.4.0** - Data visualization
- **Google Fonts** - Inter font family

## 📁 Project Structure

```
e:\city\
├── index.html              # Main HTML with all 11 pages
├── css/
│   ├── styles.css         # Design system & components
│   └── charts.css         # Chart-specific styling
├── js/
│   ├── app.js            # Main application logic
│   ├── data.js           # Dummy data for all modules
│   ├── charts.js         # Chart.js configurations
│   └── interactions.js   # Interactive features
└── assets/
    └── icons/            # Icon directory
```

## 🚀 Getting Started

### Prerequisites
- Node.js (for development server)
- Modern web browser

### Installation & Running

1. **Navigate to project directory**
   ```bash
   cd e:\city
   ```

2. **Start development server**
   ```bash
   npx serve . -p 8080
   ```

3. **Open in browser**
   ```
   http://localhost:8080
   ```

### Alternative: Direct File Access
Simply open `index.html` in your browser (some features like Chart.js CDN require a server).

## 🎮 Usage

### Navigation
- **Click sidebar items** to switch between pages
- **Click toggle button** (☰) to collapse/expand sidebar
- **Use keyboard shortcuts**:
  - `Alt + 1-9`: Quick page navigation
  - `Alt + S`: Toggle sidebar

### Submitting Feedback
1. Navigate to "Citizen Feedback" page
2. Fill in issue type, area, and description
3. Click "Submit Feedback"
4. Data persists in localStorage

### Interacting with Charts
- Hover over chart elements for tooltips
- Use toggle buttons to switch time periods
- Filter alerts by priority level

## 🎨 Design System

### Color Palette
```css
--color-bg-primary: #0a0e27      /* Navy */
--color-bg-secondary: #1a1d2e    /* Charcoal */
--color-neon-blue: #00d4ff       /* Primary accent */
--color-neon-green: #00ff88      /* Success */
--color-neon-orange: #ff6b35     /* Warning */
--color-neon-red: #ff3838        /* Danger */
--color-neon-purple: #b84fff     /* Secondary */
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Sizes**: 0.75rem - 2rem
- **Weights**: 300, 400, 500, 600, 700

### Spacing
- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 1.5rem
- **LG**: 2rem
- **XL**: 3rem

## 📊 Data

All data is **dummy/static** for demonstration purposes:
- City metrics are predefined
- Charts display sample datasets
- Feedback persists via localStorage
- No backend or API calls required

## 🌟 Key Highlights

### What Makes This Dashboard Unique

1. **Futuristic Sidebar**
   - Gradient neon border
   - Icon-first design with smooth text reveal
   - Animated hover states
   - Persistent state across sessions

2. **Professional Header**
   - Live updating clock
   - Weather widget
   - Animated alert badge with pulse effect
   - Glassmorphism backdrop blur

3. **Premium Aesthetics**
   - Dark theme with vibrant neon accents
   - Gradient text effects on metrics
   - Smooth micro-animations
   - Color-coded status indicators

## 🔧 Customization

### Changing City Name
Edit `index.html` line 78:
```html
<h1 class="city-name">Your City Name</h1>
```

### Modifying Data
Edit `js/data.js` to update:
- KPI values
- Chart datasets
- Alert messages
- Weather information

### Adjusting Colors
Edit CSS custom properties in `css/styles.css`:
```css
:root {
  --color-neon-blue: #your-color;
  /* ... other colors */
}
```

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🚀 Future Enhancements

Potential additions (not implemented):
- Real-time data integration via WebSocket
- User authentication system
- Actual data export functionality
- Advanced map visualizations
- Push notifications
- Multi-language support
- Dark/Light theme toggle

## 📄 License

This project is open source and available for educational and demonstration purposes.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize for your needs!

## 📞 Support

For questions or issues, please refer to the walkthrough documentation in the `.gemini` directory.

---

**Built with ❤️ for Smart Cities** 🏙️✨

**Server Status**: Running at `http://localhost:8080`
