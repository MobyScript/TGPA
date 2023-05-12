/////////////////////////////////
//   Program Functionality    //
///////////////////////////////

import { StudentAverage } from "./Course.js";

const getInfo = () => {
  let ID = document.getElementById("StudentID").value;

  if (ID.length == 8) {
    window.alert("Please fill up the ID");
  } else {
    window.location.href = "./Courses.html";
  }
};

const form = document.getElementById("form");
const StudentID = document.getElementById("StudentID");
const GPA = document.getElementById("GPA");

form.addEventListener("submit", function (e) {
  //On submit
  e.preventDefault(); // function to not erase below values

  const StudentIDValue = StudentID.value; //Variable to store Student ID
  // const GPAValue = GPA.value; // Variable to store GPA value (Not needed atm)

  localStorage.setItem("first-name", StudentIDValue); //Storing The Student ID locally using "first-name"
  // localStorage.setItem("GPA", GPAValue); //Storing The Student GPA locally using "GPA"

  getInfo(); //Run getINFO function
});

// These help us to define functions because Module functions are not recognized
window.StudentAverage = StudentAverage;
window.getInfo = getInfo;
