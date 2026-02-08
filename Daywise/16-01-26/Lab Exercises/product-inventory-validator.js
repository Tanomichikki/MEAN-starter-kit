const inventory = new Map();

function updateStock(productId, quantity) {
    try {
        if (!productId) throw new Error("Invalid product ID");

        const qty = Number(quantity);
        if (isNaN(qty) || qty < 0) throw new Error("Invalid quantity");

        inventory.set(productId, qty);
        console.log("Stock updated");
    } catch (error) {
        console.error(error.message);
    }
}

updateStock("P001", "50");
