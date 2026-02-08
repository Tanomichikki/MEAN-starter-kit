let sentence = "Learn JavaScript Now";
let words = sentence.split(" ");
let result = [];

for (let i = 0; i < words.length; i++) {
    let reversedWord = words[i].split("").reverse().join("");
    result.push(reversedWord);
}

console.log(result.join(" "));
