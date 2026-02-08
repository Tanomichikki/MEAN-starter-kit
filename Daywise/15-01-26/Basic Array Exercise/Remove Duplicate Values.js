let numbers = [1, 2, 3, 2, 4, 1, 5];
let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (uniqueNumbers.indexOf(numbers[i]) === -1) {
        uniqueNumbers.push(numbers[i]);
    }
}
console.log(uniqueNumbers);
