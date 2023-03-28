// Calling JSON files
import Courses from "./JSON/Courses.json" assert { type: "json" };

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

function GetDifficulty(Course) {
  for (let i = 0; i < Course.length; i++) {
    console.log(Grades[Course]);
  }
}
// Calculus I
console.log(Courses.courses[0]);
// Introduction to CS
console.log(Courses.courses[1]);
// History of Art
console.log(Courses.courses[2]);
// Data Structures
console.log(Courses.courses[3]);
// Algorithms
console.log(Courses.courses[4]);
// Programming Languages
console.log(Courses.courses[5]);
// Database Systems
console.log(Courses.courses[6]);
// Computer Networks
console.log(Courses.courses[7]);
// Artificial Intelligence
console.log(Courses.courses[8]);

// Hashmap of Grades and total value

let grade = "A+";
console.log(Grades[grade]);

GetDifficulty(Courses.courses[0]);
