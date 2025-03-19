let queue = [];

exports.enqueue = (order) => queue.push(order);
exports.dequeue = () => queue.shift();
exports.isEmpty = () => queue.length === 0;
exports.removeById = (orderId) => {
    const index = queue.findIndex(order => order.id === orderId);
    if (index !== -1) {
        queue.splice(index, 1);  
        return true;
    }
    return false;
};
