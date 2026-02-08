const list = ["hi","welcome","to","javascript"];

const longest = list.reduce((a, b) => b.length > a.length ? b : a);
const shortest = list.reduce((a, b) => b.length < a.length ? b : a);

console.log(longest, shortest);
