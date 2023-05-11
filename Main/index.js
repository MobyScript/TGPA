/////////////////////////////////
//   Program Functionality    //
///////////////////////////////

import { StudentAverage } from "./Course.js";

const getInfo = (value) => {
  let ID = document.getElementById("StudentID").value;
  let TARGET = document.getElementById("GPA").value;

  if (ID.length <= 9 && TARGET.length <= 2) {
    window.alert("Please fill up everything");
  } else if (ID.length >= 9 && TARGET.length >= 2) {
    StudentAverage(ID);
    window.location.href = "./Courses.html";
  } else {
    StudentAverage(ID);
  }
  console.log("Student ID :" + ID + "  /  " + "Target GPA" + TARGET);
};

window.StudentAverage = StudentAverage;
window.getInfo = getInfo;
