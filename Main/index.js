// Calling JSON files
import Courses from "./JSON/Courses.json" assert { type: "json" };
// import Courses from "./JSON/Courses.json" assert { type: "json" };

const Grades = {
  "A+": 95,
  A: 90,
  "B+": 85,
  B: 80,
  "C+": 75,
  C: 70,
  "D+": 65,
  D: 60,
};

// Calculus I
console.log(Courses.courses[0].name);
// // Introduction to CS
// console.log(Courses.courses[1]);
// // History of Art
// console.log(Courses.courses[2]);
// // Data Structures
// console.log(Courses.courses[3]);
// // Algorithms
// console.log(Courses.courses[4]);
// // Programming Languages
// console.log(Courses.courses[5]);
// // Database Systems
// console.log(Courses.courses[6]);
// // Computer Networks
// console.log(Courses.courses[7]);
// // Artificial Intelligence
// console.log(Courses.courses[8]);

/////////////////////////////////
//Formula to get average grade//
///////////////////////////////
let value = 0;

for (let i = 0; i < Courses.courses[2].grades.length; i++) {
  value = value + Grades[Courses.courses[2].grades[i]];
}

let average = value / Courses.courses[0].grades.length;
console.log(average);

document.getElementById("button").addEventListener("click", () => {
  document.getElementById("UserInfomration").innerHTML = Courses.courses[0];
});
