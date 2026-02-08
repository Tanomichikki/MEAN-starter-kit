/*
Word Length Analyzer
Given an array of words:
Use map() to convert all words to lowercase.
Use filter() to keep words longer than 4 characters.
Use reduce() to count the total number of characters.
*/


let words = ["Apple", "Banana", "Cat", "Elephant", "Dog"];
// convert to lowercase
let lowerWords = words.map(w => w.toLowerCase());
// keep words longer than 4 characters
let longWords = lowerWords.filter(w => w.length > 4);
// count total characters
let totalChars = longWords.reduce((sum, w) => sum + w.length, 0);
// display result
console.log(longWords);
console.log(totalChars);
