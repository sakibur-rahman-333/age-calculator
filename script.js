let dobMonth = document.getElementById("dob_month");
let dobDate = document.getElementById("dob_date");
let dobYear = document.getElementById("dob_year");
let dobForm = document.getElementById("dob_form");
let showAgeDiv = document.getElementById("show_age");
let showAge = document.createElement("p");

function createMonthDays(days) {
  for (let i = 0; i < days; i++) {
    let selectTagDays = document.createElement("option");
    selectTagDays.innerText = i + 1;
    dobDate.appendChild(selectTagDays);
    for (let i = 2024; i >= 1925; i--) {
      let selectTagYeas = document.createElement("option");
      selectTagYeas.innerText = i;
      dobYear.appendChild(selectTagYeas);
    }
  }
}

function calculateAge(month, day, year) {
  let input = month + " " + day + ", " + year;
  const dob = new Date(input);
  const toDay = new Date();

  let days;
  let years;
  let months;

  days = parseInt(toDay - dob) / 86400000;
  years = parseInt(days / 365);
  months = parseInt((days % 365) / 30);
  days = parseInt((days % 365) / 30) % 30;

  if (days < 0 || months < 0 || years < 0) {
    showAge.innerText = "Invalid selection!";
  } else {
    showAge.innerText =
      years + " years " + months + " months " + days + " days";
  }

  showAgeDiv.appendChild(showAge);
}

// Adding event listener

dobMonth.addEventListener("change", (e) => {
  if (dobMonth.value === "January") {
    createMonthDays(31);
  } else if (dobMonth.value === "February") {
    createMonthDays(29);
  } else if (dobMonth.value === "March") {
    createMonthDays(31);
  } else if (dobMonth.value === "April") {
    createMonthDays(30);
  } else if (dobMonth.value === "May") {
    createMonthDays(31);
  } else if (dobMonth.value === "June") {
    createMonthDays(30);
  } else if (dobMonth.value === "July") {
    createMonthDays(31);
  } else if (dobMonth.value === "August") {
    createMonthDays(31);
  } else if (dobMonth.value === "September") {
    createMonthDays(30);
  } else if (dobMonth.value === "October") {
    createMonthDays(31);
  } else if (dobMonth.value === "November") {
    createMonthDays(30);
  } else {
    createMonthDays(31);
  }
});

dobForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let month = dobForm[0].value;
  let day = dobForm[1].value;
  let year = dobForm[2].value;
  calculateAge(month, day, year);
});
