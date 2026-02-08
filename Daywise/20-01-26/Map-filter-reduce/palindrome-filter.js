const phrases = ["Level","Race car","coding","Madam","step on no pets","malayalam"];

const palindromes = phrases.filter(p => {
  const clean = p.toLowerCase().replace(/\s+/g,"");
  return clean === [...clean].reverse().join("");
});

console.log(palindromes);
