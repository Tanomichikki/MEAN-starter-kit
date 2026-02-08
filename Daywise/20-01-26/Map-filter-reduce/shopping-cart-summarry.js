const cart = [100, 50, 200];
const taxRate = 0.1;

const withTax = cart.map(p => p + p * taxRate);
const total = withTax.reduce((sum, p) => sum + p, 0);
const sorted = [...withTax].sort((a, b) => a - b);

console.log(withTax, total, sorted);
