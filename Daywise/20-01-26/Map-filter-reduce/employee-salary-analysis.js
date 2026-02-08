/*
Employee Salary Analysis
Given an array of employee salary values:
Use filter() to get salaries above 30,000.
Use reduce() to calculate the total salary payout.
Use sort() to arrange salaries in descending order.
*/

let salaries = [25000, 40000, 18000, 55000, 32000, 29000];
// filter salaries above 30000
let highSalaries = salaries.filter(s => s > 30000);
// total salary payout
let totalPayout = highSalaries.reduce((a, b) => a + b, 0);
// sort in descending order
highSalaries.sort((a, b) => b - a);
// display results
console.log(highSalaries);
console.log(totalPayout);
