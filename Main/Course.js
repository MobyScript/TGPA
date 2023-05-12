// Calling JSON files
import Courses from "./JSON/Courses.json" assert { type: "json" };
import Students from "./JSON/Students.json" assert { type: "json" };

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
/* 
// Calculus I
console.log(Courses.courses[0].name);
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
  */

/////////////////////////////////
//Formula to get average grade//
///////////////////////////////

// let value = 0;
// for (let i = 0; i < Courses.courses[2].grades.length; i++) {
//   value = value + Grades[Courses.courses[2].grades[i]];
// }

// let average = value / Courses.courses[0].grades.length;
// console.log(average);

/////////////////////////////////

/////////////////////////////////
//   Function for students    //
///////////////////////////////

const getStudentIDValue = localStorage.getItem("Student_ID");
const getStudentGPAValue = localStorage.getItem("Student_GPA");

export const StudentAverage = (ID) => {
  if (Students.students[ID] == undefined) {
    window.alert("Please check your ID");
  } else {
    let Student = Students.students[ID];
    let Name = Student.studentName;
    let stdID = Student.studentID;

    let value = 0;
    for (let i = 0; i < Student.courses.length; i++) {
      value = value + Grades[Student.courses[i].grade];
    }
    let StudentAverage = value / Student.courses.length;

    //Switch statement to print out details of the student

    document.getElementById("StudentName").innerHTML = Name;
    document.getElementById("StudentID").innerHTML = stdID;
    document.getElementById("StudentAVG").innerHTML = `${StudentAverage}%`;
    let StudentTotalAverage = StudentAverage;
    localStorage.setItem("StudentTotalAverage", StudentTotalAverage);
  }
};
const StudentTotalAverage = localStorage.getItem("StudentTotalAverage");
console.log(StudentTotalAverage);

function X() {
  // Run Student Average Function
  StudentAverage(getStudentIDValue);
  // Declare of Variables

  // Get Courses to run and get average
  const courseList = document.getElementById("CourseList"); // get the div element with id "CourseList"

  for (let j = 0; j < Courses.courses.length; j++) {
    let value = 0;
    //

    // Get Names
    const div = document.createElement("div"); // create new div element
    div.textContent = Courses.courses[j].name;
    courseList.appendChild(div);

    // Getting average

    for (let i = 0; i < Courses.courses[j].grades.length; i++) {
      value = value + Grades[Courses.courses[j].grades[i]];
      // courseList.appendChild(div);
    }

    // After Loop get Average of the Course

    let average = value / Courses.courses[j].grades.length;
    if (StudentTotalAverage < average) {
      const CourseAverage = document.createElement("div"); // create new div element
      CourseAverage.textContent = average;
      courseList.appendChild();
    }
  }
}

window.X = X;
