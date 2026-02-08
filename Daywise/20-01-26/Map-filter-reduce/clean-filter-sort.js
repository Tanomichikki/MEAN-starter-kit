const raw = ["  Alice ","","  bob", "  ", "ChARLie  "];

const result = raw
  .map(n => n.trim().toLowerCase())
  .filter(Boolean)
  .sort();

console.log(result);
