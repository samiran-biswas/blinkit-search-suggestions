Here's your **README.md** documentation:  

## **🔍 Real-Time Search Suggestion API (Blinkit Proxy Server)**

This project implements a real-time search suggestion interface using **Blinkit** as the data source. It includes a **backend proxy server** to handle API requests, resolve CORS issues, and manage API security.


## **📌 Features**
✔️ Fetches real-time search suggestions from Blinkit  
✔️ Uses a backend proxy server with **Express.js**  
✔️ Implements **debouncing** to optimize API calls  
✔️ Uses **modular structure** for better maintainability  
✔️ Provides **error handling** for smooth user experience  

## **🛠️ Tech Stack**
- **Backend**: Node.js, Express.js, Axios, dotenv  
- **Performance**: Debouncing  

## **📂 Project Structure**
```
📦 backend
 ┣ 📂 config
 ┃ ┗ 📜 envConfig.js        # Environment variable configuration
 ┣ 📂 controllers
 ┃ ┗ 📜 searchController.js  # Controller for handling API 
 ┣ 📂 routes
 ┃ ┗ 📜 searchRoutes.js      # API route definitions
 ┣ 📂 services
 ┃ ┗ 📜 searchService.js     # Service for making API calls to 
 ┣ 📜 .env
 ┣ 📜 package.json
 ┣ 📜 server.js
 ┗ 📜 README.md
```

## **🚀 Setup & Installation**



### **3️⃣ Configure Environment Variables**
Create a `.env` file in the root directory:
```ini
PORT=8000
LAT=28.7041
LON=77.1025
BLINKIT_API_URL=https://blinkit.com/v6/search/products
```

### **4️⃣ Start the Server**
```bash
node server
```
The server will start on `http://localhost:8000/api/search`

---

## **🛠️ API Usage**

### **🔍 Search Products**
#### **Endpoint:**  
```
GET /api/search?query=<product_name>
```
#### **Example Request:**
```
GET http://localhost:8000/api/search?query=milk
```
#### **Example Response:**
```json
{
  "suggestions": [
    { "name": "Milk 1L", "price": "₹50" ,"....."},
    { "name": "Almond Milk", "price": "₹120","....." }
  ]
}
```


## **🎯 Design Decisions**
1️⃣ **Backend Proxy Server:** Prevents **CORS issues** and keeps API parameters **secure**.  
2️⃣ **Debouncing:** Reduces excessive API calls when the user types quickly.  
3️⃣ **Error Handling:** Gracefully handles API failures & missing query parameters.  
4️⃣ **Modular Code:** Controller, service, and route separation for scalability.  
