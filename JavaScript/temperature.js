let choice = prompt("Type C to convert Celsius → Fahrenheit or F for Fahrenheit → Celsius");

if (choice.toUpperCase() === "C") {
  let c = parseInt(prompt("Enter temperature in °C:"));
  let f = (c * 9/5) + 32;
  console.log(`${c}°C = ${f}°F`);
} 
else if (choice.toUpperCase() === "F") {
  let f = parseInt(prompt("Enter temperature in °F:"));
  let c = 5/9 * (f - 32);
  console.log(`${f}°F = ${c}°C`);
} 
else {
  console.log("Invalid choice");
}
