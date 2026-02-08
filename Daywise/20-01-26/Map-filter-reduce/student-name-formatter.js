/*
Student Name Formatter
Given an array of student names in mixed case:
Use map() to capitalize the first letter of each name.
Use sort() to arrange names alphabetically.
Use forEach() to display the formatted list.
 */


let names = ["raVi", "anil", "SARA", "joHN"];
// capitalize first letter
let formattedNames = names.map(n =>
  n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
);
// sort alphabetically
formattedNames.sort();
// display names
formattedNames.forEach(n => console.log(n));
