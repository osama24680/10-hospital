console.log("regPaPassword");
let Details = document.querySelectorAll(".details");
let regPaNameError = document.querySelector(".regPaNameError");
let regPaMailError = document.querySelector(".regPaMailError");
let regPaPasswordError = document.querySelector(".regPaPasswordError");
let regPaName = document.querySelector(".regPaName");
let regPaMail = document.querySelector(".regPaMail");
let regPaPassword = document.querySelector(".regPaPassword");
let onSubmitRegisterPatients = document.getElementById(
  "onSubmitRegisterPatients"
);

let regDoctorNameError = document.querySelector(".regDoctorNameError");
let regDoctorSpecializationError = document.querySelector(
  ".regDoctorSpecializationError"
);
let regDoctorMailError = document.querySelector(".regDoctorMailError");
let regDoctorOasswordError = document.querySelector(".regDoctorOasswordError");

let regDoctorName = document.querySelector(".regDoctorName");
let regDoctorSpecialization = document.querySelector(
  ".regDoctorSpecialization"
);
let regDoctorMail = document.querySelector(".regDoctorMail");
let regDoctorPassword = document.querySelector(".regDoctorPassword");
let onSubmitRegisterDoctors = document.getElementById(
  "onSubmitRegisterDoctors"
);

let passwordEye = document.querySelector(".passwordEye");
let passwordEyeLogin = document.querySelector(".passwordEyeLogin");
let goToLoginPage = document.querySelector(".goToLoginPage");

// * open window of analytics
for (let i = 0; i < Details.length; i++) {
  Details[i].addEventListener("click", function () {
    window.open(
      "https://thingspeak.com/channels/2382138",
      "_blank",
      "width=1000,height=800"
    );
  });
}

// * -------------------------------------------------Validation for Register Patients-------------------------------------------------

const regexPatientName = /^[a-zA-Z]{3,20}$/;
const regexPatientEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPatientPassword =
  /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){3,})(?=.*[\W_]).{8,}$/;

passwordEye.addEventListener("click", function () {
  regPaPassword.type = regPaPassword.type === "password" ? "text" : "password";
});
passwordEyeLogin.addEventListener("click", function () {
  regDoctorPassword.type = regDoctorPassword.type === "password" ? "text" : "password";
});

// * localStorage
let allUsers;
if (localStorage.getItem("localUsers") == null) {
  allUsers = [];
} else {
  allUsers = JSON.parse(localStorage.getItem("localUsers"));
}

// * ####################Register#######################

onSubmitRegisterPatients.addEventListener("click", function (e) {
  e.preventDefault();

  let signEmailFound = 0;

  for (let i = 0; i < allUsers.length; i++) {
    if (regPaMail.value == allUsers[i].signEmailData) {
      signEmailFound++;
      console.log(signEmailFound);
    }
  }

  let nameFlag = false;
  let mailFlag = false;
  let passwordFlag = false;

  if (regPaName.value.match(regexPatientName)) {
    regPaNameError.style.display = "none";
    nameFlag = true;
  } else {
    regPaNameError.style.display = "block";
    nameFlag = false;
  }

  if (signEmailFound > 0) {
    regPaMailError.innerHTML = "Existed email";
    mailFlag = false;
  } else if (!regPaMail.value.match(regexPatientEmail)) {
    regPaMailError.style.display = "block";
    mailFlag = false;
  } else if (regPaMail.value.match(regexPatientEmail)) {
    regPaMailError.style.display = "none";
    mailFlag = true;
  }

  if (regPaPassword.value.match(regexPatientPassword)) {
    regPaPasswordError.style.display = "none";
    passwordFlag = true;
  } else {
    regPaPasswordError.style.display = "block";
    passwordFlag = false;
  }

  if (nameFlag && mailFlag && passwordFlag) {
    let userSignData = {
      signNameData: regPaName.value,
      signEmailData: regPaMail.value,
      signPasswordData: regPaPassword.value,
    };
    allUsers.push(userSignData);
    localStorage.setItem("localUsers", JSON.stringify(allUsers));

    console.log("all flags ready");
    goToLoginPage.style.display = "block";
    window.location.href = "../login/login.html";
  } else {
    goToLoginPage.style.display = "none";
  }
  signEmailFound = 0;
});

onSubmitRegisterDoctors.addEventListener("click", function (e) {
  e.preventDefault();

  let signEmailFound = 0;

  for (let i = 0; i < allUsers.length; i++) {
    if (regDoctorMail.value == allUsers[i].signEmailData) {
      signEmailFound++;
      console.log(signEmailFound);
    }
  }

  let nameFlag = false;
  let specializationFlag = false;
  let mailFlag = false;
  let passwordFlag = false;

  if (regDoctorName.value.match(regexPatientName)) {
    regDoctorNameError.style.display = "none";
    nameFlag = true;
  } else {
    regDoctorNameError.style.display = "block";
    nameFlag = false;
  }

  if (regDoctorSpecialization.value.match(regexPatientName)) {
    regDoctorSpecializationError.style.display = "none";
    specializationFlag = true;
  } else {
    regDoctorSpecializationError.style.display = "block";
    specializationFlag = false;
  }

  if (signEmailFound > 0) {
    regDoctorMailError.innerHTML = "Existed email";
    mailFlag = false;
  } else if (!regDoctorMail.value.match(regexPatientEmail)) {
    regDoctorMailError.style.display = "block";
    mailFlag = false;
  } else if (regDoctorMail.value.match(regexPatientEmail)) {
    regDoctorMailError.style.display = "none";
    mailFlag = true;
  }

  if (regDoctorPassword.value.match(regexPatientPassword)) {
    regDoctorOasswordError.style.display = "none";
    passwordFlag = true;
  } else {
    regDoctorOasswordError.style.display = "block";
    passwordFlag = false;
  }

  if (nameFlag && mailFlag && passwordFlag && specializationFlag) {
    let userSignData = {
      signNameData: regDoctorName.value,
      signEmailData: regDoctorMail.value,
      signPasswordData: regDoctorPassword.value,
      specialisation: regDoctorSpecialization.value,
    };
    allUsers.push(userSignData);
    localStorage.setItem("localUsers", JSON.stringify(allUsers));

    console.log("all flags ready");
    goToLoginPage.style.display = "block";
    window.location.href = "../login/login.html";
  } else {
    goToLoginPage.style.display = "none";
  }
  signEmailFound = 0;
});
