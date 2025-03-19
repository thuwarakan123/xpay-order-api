const express = require('express');
const { createOrder, getOrders, getOrderById, cancelOrder, processNextOrder } = require('../controllers/orderController');

const router = express.Router();

router.post('/orders', createOrder);
router.get('/orders', getOrders);
router.get('/orders/:id', getOrderById);
router.delete('/orders/:id', cancelOrder);
router.post('/process-next-order', processNextOrder);

module.exports = router;
