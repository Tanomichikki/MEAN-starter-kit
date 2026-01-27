function calculateInvoiceTotal(prices) {
    try {
        if (!prices.length) throw new Error("Empty input array");

        let total = 0;
        for (let price of prices) {
            const num = Number(price);
            if (isNaN(num)) throw new Error(`Invalid numeric value: ${price}`);
            total += num;
        }

        console.log(`Total Amount: ${total.toFixed(2)}`);
    } catch (error) {
        console.error(error.message);
    }
}

calculateInvoiceTotal(["10.5", "20", "5.25"]);
