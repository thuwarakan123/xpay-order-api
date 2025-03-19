# XPay - E-commerce Order Management API

## 📌 Overview

The **XPay Order Management API** is a simple **RESTful API** built using **Node.js and Express.js** to manage orders in an e-commerce system. It provides functionalities for:

🏆 Creating orders  
🔍 Fetching all orders or a specific order  
🚫 Canceling orders (removes them from the queue)  
🌊 Processing orders using a queue system  
💼 Basic inventory management (stock validation)  

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone YOUR_GITHUB_REPOSITORY_URL
cd xpay-order-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run the Application**
For development mode (with automatic restarts):
```sh
npm run dev
```
For production mode:
```sh
npm start
```

The API will start on **http://localhost:5000**.

---

## 🛠️ Project Structure

```
xpay-order-api/
👉 src/
    👉 controllers/       # Handles request logic
    👉 models/            # (Future: Define models if needed)
    👉 routes/            # API route definitions
    👉 services/          # Business logic (orders, inventory, etc.)
    👉 middleware/        # Middleware (error handling, etc.)
    👉 utils/             # Helper functions (queue management)
    👉 app.js             # Express app setup
    👉 server.js          # Server entry point
👉 config/
    👉 products.json      # Predefined product list
👉 tests/                 # API tests
👉 Xpay.postman_collection.json  # Postman collection
👉 package.json
👉 README.md
```

---

## 🔥 API Endpoints

### **1️⃣ Create a New Order**
**Endpoint:** `POST /api/orders`  
**Request Body Example:**
```json
{
  "customer": "John Doe",
  "products": [{"id": "p1", "quantity": 2}]
}
```
**Success Response:**
```json
{
  "success": true,
  "message": "Order added to the queue successfully.",
  "data": {
    "id": "1234-uuid",
    "customer": "John Doe",
    "products": [{"id": "p1", "quantity": 2}],
    "status": "pending"
  }
}
```

---

### **2️⃣ Get All Orders**
**Endpoint:** `GET /api/orders`  

---

### **3️⃣ Get a Specific Order**
**Endpoint:** `GET /api/orders/:id`  

---

### **4️⃣ Cancel an Order**
**Endpoint:** `DELETE /api/orders/:id`  

---

### **5️⃣ Process the Next Order**
**Endpoint:** `POST /api/process-next-order`  

---

## 🛠️ Inventory Management
- Products are stored in **`config/products.json`**.
- When an order is placed, stock is reduced.
- If stock is insufficient, the API will return an error.

---

## 🛠️ Postman Collection
You can use **Postman** to test the API.

### **Import Postman Collection**
1. Open **Postman**
2. Click on **Import**
3. Select `Xpay.postman_collection.json` (included in this repo)
4. Run API requests with pre-configured settings.

---

## 🛠️ Running Tests
You can run API tests using **Jest**:
```sh
npm test
```

---

## 🔥 Future Improvements
- Implement **database storage** (MongoDB or PostgreSQL)
- Add **authentication** for order creation
- Implement **WebSockets** for real-time order tracking

---

## 📄 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Feel free to **fork** this repository and make improvements. Submit a **pull request** if you add valuable features!


 
