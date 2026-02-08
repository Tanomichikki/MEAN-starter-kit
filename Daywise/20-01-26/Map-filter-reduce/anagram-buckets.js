const words = ["Listen","silent","enlist","stone","tones","Apple"];

const buckets = words.reduce((acc, w) => {
  const key = w.toLowerCase().split("").sort().join("");
  (acc[key] ||= []).push(w);
  return acc;
}, {});

const anagrams = Object.values(buckets).filter(g => g.length > 1);
console.log(anagrams);
