/////////////////////////////////
//        Import Files        //
///////////////////////////////
import Courses from "./JSON/Courses.json" assert { type: "json" };
import Students from "./JSON/Students.json" assert { type: "json" };

/////////////////////////////////
//      Hashmap Of Grades     //
///////////////////////////////

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

////////////////////////////////
//   Function for students    //
///////////////////////////////

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

    // Storing the Average of the Student
    localStorage.setItem("StudentTotalAverage", StudentTotalAverage);
  }
};
const StudentTotalAverage = localStorage.getItem("StudentTotalAverage");

const CourseAverage = () => {
  const courseList = document.getElementById("CourseList"); // get the div element with id "CourseList"

  for (let j = 0; j < Courses.courses.length; j++) {
    let value = 0;

    for (let i = 0; i < Courses.courses[j].grades.length; i++) {
      //Get the sum of all the courses
      value = value + Grades[Courses.courses[j].grades[i]];
    }

    //Getting the average of the numbers
    let average = value / Courses.courses[j].grades.length;
    if (StudentTotalAverage < average) {
      const div = document.createElement("div"); // create new div element
      div.textContent = Courses.courses[j].name;
      div.style.marginTop = "20px";
      courseList.appendChild(div);

      const CourseAverage = document.createElement("div"); // create new div element
      CourseAverage.textContent = `Percentage of Pass: ${average}%`;
      courseList.appendChild(CourseAverage);
    }
  }
};

function X() {
  const ID = localStorage.getItem("first-name");
  StudentAverage(ID);
  CourseAverage();
  console.log(2);
}

window.X = X;
