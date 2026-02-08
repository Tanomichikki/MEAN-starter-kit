let names = ["Ramesh", "Anu", "Srinivas", "Raj"];
let longNames = [];

for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
        longNames.push(names[i]);
    }
}

console.log(longNames);
