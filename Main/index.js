/////////////////////////////////
//   Program Functionality    //
///////////////////////////////

import { StudentAverage } from "./Course.js";

const getInfo = (value) => {
  let ID = document.getElementById("StudentID").value;
  let TARGET = document.getElementById("GPA").value;

  if (ID.length <= 9 && TARGET.length <= 2) {
    window.alert("Please fill up everything");
  } else {
    StudentAverage(ID);
  }
  console.log("Student ID :" + ID + "  /  " + "Target GPA" + TARGET);
};

window.StudentAverage = StudentAverage;
window.getInfo = getInfo;
