/*
Student Marks Processing
You are given an array of student marks.
Use map() to add 5 grace marks to each student.
Use filter() to keep only students who scored 40 or above.
Use forEach() to display the final marks.
*/


let marks = [35, 42, 28, 50, 39, 60];
// add 5 grace marks
let graceMarks = marks.map(m => m + 5);
// keep marks >= 40
let passedMarks = graceMarks.filter(m => m >= 40);
// display final marks
passedMarks.forEach(m => console.log(m));