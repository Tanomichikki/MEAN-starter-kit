const names = ["John","Alexander","Amy"];

const result = names
  .sort((a, b) => a.length - b.length)
  .map(n => `${n} (${n.length})`);

console.log(result);
