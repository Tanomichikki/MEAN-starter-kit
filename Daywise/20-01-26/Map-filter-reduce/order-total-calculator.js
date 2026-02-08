/*
Order Total Calculator
Given an array of order amounts:
Use filter() to keep orders above ₹500.
Use reduce() to calculate the final bill amount.
Use forEach() to show eligible orders.
*/


let orders = [250, 1200, 450, 800, 999, 300];
// keep orders above 500
let eligibleOrders = orders.filter(o => o > 500);
// calculate final bill
let finalBill = eligibleOrders.reduce((sum, o) => sum + o, 0);
// display eligible orders
eligibleOrders.forEach(o => console.log(o));
console.log("Final Bill Amount:", finalBill);
