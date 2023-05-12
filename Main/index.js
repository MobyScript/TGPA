/////////////////////////////////
//   Program Functionality    //
///////////////////////////////

import { StudentAverage } from "./Course.js";

const getInfo = () => {
  let ID = document.getElementById("StudentID").value;
  let TARGET = document.getElementById("GPA").value;
  if (ID.length <= 8) {
    window.alert("Please fill up everything");
  } else if (ID.length == 9) {
    window.location.href = "./Courses.html";
  } else {
    window.location.href = "./Courses.html";
  }
};

const form = document.getElementById("form");
const StudentID = document.getElementById("StudentID");
const GPA = document.getElementById("GPA");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const StudentIDValue = StudentID.value;
  const GPAValue = GPA.value;
  localStorage.setItem("first-name", StudentIDValue);
  localStorage.setItem("last-name", GPAValue);
  getInfo();
  console.log(StudentIDValue);
});
window.StudentAverage = StudentAverage;
window.getInfo = getInfo;
