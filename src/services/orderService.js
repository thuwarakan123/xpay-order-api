const { v4: uuidv4 } = require('uuid');
const orderQueue = require('../utils/orderQueue');
const inventoryService = require('./inventoryService');

let orders = [];

exports.addOrder = (orderData) => {
    if (!orderData.customer || typeof orderData.customer !== 'string' || orderData.customer.trim() === "") {
        throw new Error("Customer name is missing or invalid.");
    }

    if (!orderData.products || !Array.isArray(orderData.products) || orderData.products.length === 0) {
        throw new Error("Products list is missing or invalid.");
    }

    orderData.products.forEach((product, index) => {
        if (!product.id || typeof product.id !== 'string') {
            throw new Error(`Product ID is missing or invalid at index ${index + 1}.`);
        }
        if (!product.quantity || typeof product.quantity !== 'number' || product.quantity <= 0) {
            throw new Error(`Product quantity is missing or invalid for product ID ${product.id}.`);
        }
        if (!inventoryService.isProductAvailable(product.id, product.quantity)) {
            throw new Error(`Product ID ${product.id} is out of stock or insufficient quantity.`);
        }
    });

    const newOrder = {
        id: uuidv4(),
        customer: orderData.customer,
        products: orderData.products,
        status: "pending"
    };

    orders.push(newOrder);
    orderQueue.enqueue(newOrder);
    inventoryService.reduceStock(orderData.products);

    return newOrder;
};

exports.getAllOrders = () => orders;

exports.getOrder = (id) => orders.find(order => order.id === id);

exports.cancelOrderById = (id) => {
    const order = orders.find(order => order.id === id);
    if (!order) return null;
    order.status = "canceled";
    orderQueue.removeById(id);
    return order;
};

// exports.cancelOrderById = (id) => {
//     const orderIndex = orders.findIndex(order => order.id === id);
//     if (orderIndex === -1) return null;

//     // Remove order from orders list
//     const canceledOrder = orders.splice(orderIndex, 1)[0];
//     canceledOrder.status = "canceled";

//     // Remove order from the queue
//     const removedFromQueue = orderQueue.removeById(id);

//     return { canceledOrder, removedFromQueue };
// };

exports.processOrder = () => {
    const nextOrder = orderQueue.dequeue();
    if (!nextOrder) return null;
    nextOrder.status = "processed";
    return nextOrder;
};
