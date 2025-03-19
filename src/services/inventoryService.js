const productData = require('../../config/products.json');

exports.isProductAvailable = (productId, quantity) => {
    const product = productData.find(p => p.id === productId);
    return product && product.quantity >= quantity;
};

exports.reduceStock = (products) => {
    products.forEach(product => {
        const item = productData.find(p => p.id === product.id);
        if (item) item.quantity -= product.quantity;
    });
};
