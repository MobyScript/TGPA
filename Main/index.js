/////////////////////////////////
//   Program Functionality    //
///////////////////////////////

import { StudentAverage } from "./Course.js";

// import { StudentAverage } from "./Course";

// When the user fills-up the information request
// document.getElementById("button").addEventListener("click", () => {});

// document.getElementById("myButton").addEventListener("click", getInfomration());

////////
// Import getInfo from Course.js

const getInfo = (value) => {
  let ID = document.getElementById("StudentID").value;
  let TARGET = document.getElementById("GPA").value;

  if (ID.length <= 9 && TARGET.length <= 2) {
    window.alert("Please fill up everything");
  } else {
    StudentAverage(ID);
  }

  // StudentAverage();
  console.log("Student ID :" + ID + "  /  " + "Target GPA" + TARGET);
};
window.StudentAverage = StudentAverage;
window.getInfo = getInfo;
