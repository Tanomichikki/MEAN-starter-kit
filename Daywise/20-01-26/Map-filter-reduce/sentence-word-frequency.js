const sentence = "JS arrays, arrays are fun; JS map filter reduce!";

const freq = sentence
  .toLowerCase()
  .replace(/[^\w\s]/g,"")
  .split(/\s+/)
  .reduce((acc, w) => {
    acc[w] = (acc[w] || 0) + 1;
    return acc;
  }, {});

console.log(freq);
