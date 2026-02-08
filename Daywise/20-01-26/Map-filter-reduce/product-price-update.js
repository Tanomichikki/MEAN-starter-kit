/*Product Price Update
You are given an array of product prices:
Use map() to apply a 10% discount.
Use sort() to display prices from lowest to highest.
Use forEach() to print the discounted prices.
*/


let prices = [1200, 750, 3000, 450, 1800];
// apply 10% discount
let discountedPrices = prices.map(p => p * 0.9);
// sort ascending
discountedPrices.sort((a, b) => a - b);
// print prices
discountedPrices.forEach(p => console.log(p));
