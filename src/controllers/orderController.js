const { addOrder, getAllOrders, getOrder, cancelOrderById, processOrder } = require('../services/orderService');

exports.createOrder = (req, res) => {
    try {
        const newOrder = addOrder(req.body);
        res.status(201).json({success: true, message: 'Order added to the queue successfully.', data: newOrder});
    } 
    catch (error) {
        res.status(400).json({ success: false, message: error.message, data: null });
    }
};

exports.getOrders = (req, res) => {
    res.json({success: true, message: 'data fetched successfully.', data: getAllOrders()});
};

exports.getOrderById = (req, res) => {
    const order = getOrder(req.params.id);
    if (!order) return res.status(404).json({ success: false, error: "Order not found", data: null });
    res.json({success: true, message: 'data fetched successfully.', data: order});
};

exports.cancelOrder = (req, res) => {
    const result = cancelOrderById(req.params.id);
    if (!result) return res.status(404).json({ success: false, message: "Order not found", data: null  });
    res.json({success: true, message: "Order canceled successfully", data: result });
};

exports.processNextOrder = (req, res) => {
    const result = processOrder();
    if (!result) return res.status(404).json({ success: false, message: "No orders in queue",  data: null});
    res.json({success: true, message: "Order proced successfully", data: result });
};

  
