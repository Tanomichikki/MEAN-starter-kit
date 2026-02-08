const marks = [60, 80, 90, 70, 50];

const total = marks.reduce((a, b) => a + b, 0);
const avg = total / marks.length;
const aboveAvg = marks.filter(m => m > avg);

console.log(avg, aboveAvg);
