let products = ["Laptop", "Mouse", "Keyboard"];
let searchItem = "mouse";
let found = false;

for (let i = 0; i < products.length; i++) {
 //case-insensitive comparison
    if (products[i].toLowerCase() === searchItem.toLowerCase()) {
        found = true;
        break;
    }
}

console.log(found ? "Product found" : "Product not found");
