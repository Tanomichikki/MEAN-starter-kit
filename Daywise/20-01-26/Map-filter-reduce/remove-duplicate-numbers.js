/*
Remove Duplicate Numbers
Given an array with duplicate numbers:
Use filter() and indexOf() to remove duplicates.
Use sort() to arrange the unique numbers.
Display the result.
*/


let numbers = [4, 2, 5, 2, 1, 4, 3, 5];
// remove duplicates
let uniqueNumbers = numbers.filter((num, index, arr) => arr.indexOf(num) === index);
// sort ascending
uniqueNumbers.sort((a, b) => a - b);
// display result
console.log(uniqueNumbers);
