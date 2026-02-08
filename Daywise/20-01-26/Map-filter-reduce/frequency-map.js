const words = ["Red","blue","red","RED","Blue","green"];

const freq = words.reduce((acc, w) => {
  w = w.toLowerCase();
  acc[w] = (acc[w] || 0) + 1;
  return acc;
}, {});

console.log(freq);
