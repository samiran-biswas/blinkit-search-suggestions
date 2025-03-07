# Real-Time Search Suggestion Interface (Blinkit)

## 📌 Overview
This project is a real-time search suggestion interface that fetches search suggestions from **Blinkit** using a backend proxy server. The application features a **React frontend** with debouncing for optimized API requests and an **Express.js backend** acting as a proxy server.

## 🚀 Features
- **Live Search Suggestions**: Fetch search suggestions as the user types.
- **Debounced API Requests**: Optimized API calls using debouncing to reduce network load.
- **Backend Proxy Server**: Avoids CORS issues and protects API keys.
- **Loading Indicator**: Shows a spinner while fetching suggestions.
- **Responsive UI**: Works across all devices.

---

## 📚 Project Structure
### **Frontend** (React.js)
```
frontend/
│— src/
│   ├── components/          # UI Components (SearchBar, Spinner, SuggestionsList, etc.)
│   ├── redux/               # Redux Store and Slices
│   ├── services/            # API Service Functions
│   ├── App.js               # Main App Component
│   ├── index.js             # Entry Point
│   └── config.js            # API Configuration
│— public/                  # Static Assets
│— package.json             # Dependencies & Scripts
│— README.md                # Documentation
```

### **Backend** (Node.js + Express.js)
```
backend/
 ┣ 📚 config
 ┃ └ 📚 envConfig.js        # Environment variable configuration
 ┣ 📚 controllers
 ┃ └ 📚 searchController.js  # Controller for handling API
 ┣ 📚 routes
 ┃ └ 📚 searchRoutes.js      # API route definitions
 ┣ 📚 services
 ┃ └ 📚 searchService.js     # Service for making API calls
 ┣ 📄 .env
 ┣ 📄 package.json
 ┣ 📄 server.js
 └ 📄 README.md
```

---

## 🛠 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/samiran-biswas/blinkit-search-suggestions.git
cd blinkit-search-suggestions
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create a **.env** file in the `backend/` directory and add the following:
```env
PORT=8000
LAT=28.7041
LON=77.1025
BLINKIT_API_URL=https://blinkit.com/v6/search/products
```

Start the backend server:
```bash
node index.js
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm start
```

---

## 🔗 API Integration

The **backend proxy server** forwards search queries to Blinkit's API and returns suggestions. The frontend interacts with the backend proxy at:
```http
GET http://localhost:8000/api/search?query=<search_term>
```

### **Debouncing Implementation (Frontend)**
To optimize API calls, debouncing is implemented using **Lodash**:
```javascript
import { useState } from "react";
import { debounce } from "lodash";

const handleSearch = debounce(async (query) => {
  const response = await fetch(`http://localhost:8000/api/search?query=${query}`);
  const data = await response.json();
  setSuggestions(data);
}, 300); // 300ms delay
```


## 📌 Design Decisions

### 1️⃣ **Why Use a Backend Proxy?**
- Avoids **CORS issues**
- Hides API details from frontend users

### 2️⃣ **Performance Optimizations**
- **Debouncing** reduces API calls during user typing.
- **Lazy loading** ensures requests only trigger when needed.
- **Minimal API requests** improve speed and efficiency.


## 🎯 Future Improvements
- ✅ Implement **throttling** for further performance tuning.
- ✅ Use **TypeScript** for better type safety.
- ✅ Add **unit tests** for key features.


## 📩 Contact
For any questions, reach out at [samiranbiswas124@gmail.com](mailto:samiranbiswas124@gmail.com).

