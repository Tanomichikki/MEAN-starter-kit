const words = ["Apple","angle","Banana","boat","cat"];

const grouped = words.reduce((acc, w) => {
  const key = w[0].toLowerCase();
  (acc[key] ||= []).push(w);
  return acc;
}, {});

console.log(grouped);
