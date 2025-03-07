# Real-time Search Suggestion React Application

This project is a React-based frontend application that includes Redux for state management, Bootstrap for styling, and various components for product search and display.

## Features
- **Product Search** with real-time suggestions
- **Product Details Modal** with image carousel and stock information
- **Redux Toolkit** for managing search state
- **Debounced API Calls** using lodash.debounce
- **Bootstrap UI** for responsive design

## Technologies Used
- React 19
- Redux Toolkit
- React Bootstrap
- Axios for API calls
- Lodash for debouncing
- React Router (if applicable)

## Installation

### Prerequisites
Ensure you have Node.js and npm installed.

### Steps to Install
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Folder Structure
```
frontend/
│── src/
│   ├── components/          # UI Components (SearchBar, Spinner, SuggestionsList, etc.)
│   ├── redux/               # Redux Store and Slices
│   ├── services/            # API Service Functions
│   ├── App.js               # Main App Component
│   ├── index.js             # Entry Point
│   ├── config.js            # API Configuration
│── public/                  # Static Assets
│── package.json             # Dependencies & Scripts
│── README.md                # Documentation
```

## API Configuration
The API endpoint for product search is defined in `config.js`:
```js
export const API_URL = "http://localhost:8000/api/search"; // Update this to the actual API URL
```

## Redux Setup
Redux is used for managing the search functionality.
- `searchSlice.js` handles fetching and storing search results.
- `store.js` configures the Redux store.
- `useDebouncedFetch.js` provides debounced API calls.

## Available Scripts
- `npm start` - Runs the app in development mode.
- `npm build` - Builds the app for production.
- `npm test` - Runs tests.
- `npm eject` - Ejects from Create React App.
