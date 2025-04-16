# Mini Dashboard

A lightweight, responsive dashboard application built with React and Tailwind CSS, featuring advanced reusable.

## Features

- **Dashboard Overview**: View key statistics and metrics at a glance
- **User Management**: List, view, and add users with a modal interface
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI Components**: Tabs, data tables, modals, and buttons

## Tech Stack

- React 19
- React Router 7
- Tailwind CSS 4
- Vite 6

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository

    ```bash
        git clone https://github.com/yourusername/mini-dashboard.git
        cd mini-dashboard
    ```

2. Install dependencies

    ```bash
        npm install
        # or
        yarn
    ```

3. Start the development server

    ```bash
        npm run dev
        # or
        yarn dev
    ```

4. Open your browser and visit `http://localhost:5173/`

## Project Structure

```bash
    mini-dashboard/
    ├── public/               # Public assets
    ├── src/
    │   ├── components/       # Reusable components
    │   │   ├── common/       # Shared UI components
    │   │   ├── dashboard/    # Dashboard-specific components
    │   │   └── layout/       # Layout components
    │   ├── pages/            # Page components
    │   │   └── dashboard/    # Dashboard pages
    │   ├── App.jsx           # Main application component
    │   ├── index.css         # Global CSS
    │   └── main.jsx          # Entry point
    ├── index.html            # HTML template
    └── vite.config.js        # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## Components

### Common Components

- **Button**: Customizable button with different variants (primary, secondary, danger)
- **DataTable**: Flexible table component for displaying data
- **Modal**: Popup dialog for forms and information display
- **Tabs**: Tabbed interface component

### Dashboard Components

- **OverviewStatCard**: Card component for displaying statistics
- **DashboardLayout**: Main layout with sidebar and content area

## Pages

- **OverviewPage**: Main dashboard with statistics and tabs for different views
- **UsersPage**: User management page with CRUD operations

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
