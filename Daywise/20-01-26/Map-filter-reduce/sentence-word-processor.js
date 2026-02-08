/*
Sentence Word Processor
Given a sentence:
Convert it into an array of words.
Use map() to reverse each word.
Use forEach() to print each transformed word. 
*/



let sentence = "Hello world from JavaScript";
// split into words
let words = sentence.split(" ");
// reverse each word
let reversedWords = words.map(w => w.split("").reverse().join(""));
// display each word
reversedWords.forEach(w => console.log(w));
