// Form variables
let dobMonth = document.getElementById("dob_month");
let dobForm = document.getElementById("dob_form");
let dobDate = document.getElementById("dob_date");
let dobYear = document.getElementById("dob_year");
let showAge = document.getElementById("show_age");
let calCulatedYearsTag = document.getElementById("calCulatedYearsTag");
let calCulatedMonthsTag = document.getElementById("calCulatedMonthsTag");
let calCulatedDaysTag = document.getElementById("calCulatedDaysTag");

const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Calculating age
function calculateAge(selectedDay, selectedMonth, selectedYear) {
  // console.log("DOB: ", selectedDay, selectedMonth, selectedYear);
  const toDay = new Date();
  let currDay = toDay.getDate();
  let currMonth = toDay.getMonth();
  let currYear = toDay.getFullYear();
  // console.log("Current: ", currDay, currMonth, currYear);
  if (selectedDay > currDay) {
    currDay = currDay + month[selectedMonth - 1];
    currMonth--;
  }
  if (selectedMonth > currMonth) {
    currYear--;
    currMonth += 12;
  }
  let calCulatedDay = currDay - selectedDay;
  let calCulatedMonth = currMonth - selectedMonth;
  let calCulatedYear = currYear - selectedYear;
  // console.log(calCulatedDay, calCulatedMonth, calCulatedYear);
  if (calCulatedDay < 0 || calCulatedMonth < 0 || calCulatedYear < 0) {
    calCulatedYearsTag.remove();
    calCulatedMonthsTag.remove();
    calCulatedDaysTag.remove();
    const invalid = document.createElement("p");
    invalid.innerText = "Invalid Selection";
    showAge.appendChild(invalid);
  }
  calCulatedYearsTag.innerText = calCulatedYear + " Years";
  calCulatedMonthsTag.innerText = calCulatedMonth + " Months";
  calCulatedDaysTag.innerText = calCulatedDay + " Days";
}

function showSelectedMonthDays(month) {
  if (dobDate.childElementCount !== 0) {
    dobDate.innerHTML = "";
  }
  for (let i = 0; i < months[month - 1]; i++) {
    let selectTagDays = document.createElement("option");
    selectTagDays.innerText = i + 1;
    dobDate.appendChild(selectTagDays);
  }
  // console.log(days);
}

function showSelectedYear() {
  if (dobYear.childElementCount !== 0) {
    dobYear.innerHTML = "";
  }
  for (let i = 2024; i >= 1925; i--) {
    let selectTagYear = document.createElement("option");
    selectTagYear.innerText = i;
    selectTagYear.value = i;
    dobYear.appendChild(selectTagYear);
  }
  // console.dir(dobYear);
}

// Adding event listener
dobMonth.addEventListener("change", (e) => {
  // console.log(dobMonth.value);
  showSelectedMonthDays(dobMonth.value);
});

// dobYear.addEventListener("change", (e) => {
//   showSelectedYear();
// });

dobForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let selectedMonth = dobForm[0].value;
  let selectedDay = dobForm[1].value;
  let selectedYear = dobForm[2].value;
  calculateAge(selectedDay, selectedMonth, selectedYear);
});

showSelectedYear();
