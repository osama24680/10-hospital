let onSubmitLogin = document.querySelector(".onSubmitLogin");
let loginEmail = document.querySelector(".loginEmail");
let loginPassword = document.querySelector(".loginPassword");
let unFoundEmail = document.querySelector(".unFoundEmail");

// * localStorage
let allUsers;
if (localStorage.getItem("localUsers") == null) {
  allUsers = [];
} else {
  allUsers = JSON.parse(localStorage.getItem("localUsers"));
}

onSubmitLogin.addEventListener("click", function () {
  let loginEmailFound = 0;
  let loginPasswordFound = 0;
  let userName = "";
  let specialisation = "";

  if (loginEmail.value.trim() == "" && loginPassword.value.trim() == "") {
    unFoundEmail.style.display = "block";
    unFoundEmail.innerHTML = "please enter your email and password";
  } else if (loginEmail.value.trim() == "") {
    unFoundEmail.style.display = "block";
    unFoundEmail.innerHTML = "please enter your email";
  } else if (loginPassword.value.trim() == "") {
    unFoundEmail.innerHTML = "please enter your password";
    unFoundEmail.style.display = "block";
  } else {
    for (let i = 0; i < allUsers.length; i++) {
      if (loginEmail.value.trim() == allUsers[i].signEmailData) {
        loginEmailFound++;
        userName = allUsers[i].signNameData.split(" ")[0];
        specialisation = allUsers[i]?.specialisation;
      }
      if (loginPassword.value == allUsers[i].signPasswordData) {
        loginPasswordFound++;
        userName = allUsers[i].signNameData.split(" ")[0];
        specialisation = allUsers[i]?.specialisation;
      }
    }

    if (loginEmailFound > 0 && loginPasswordFound > 0) {
      //email and password are found
      unFoundEmail.style.display = "none";
      localStorage.setItem("username", userName);
      localStorage.setItem("specialisation", specialisation);

      if (specialisation) {
        window.location.href = "/doctors/doctors.html";
      } else {
        window.location.href = "/index.html";
      }
    } else if (loginPasswordFound == 0 && loginEmailFound > 0) {
      //only email is found
      unFoundEmail.style.display = "block";
      unFoundEmail.innerHTML = "wrong password";
    } else if (loginPasswordFound > 0 && loginEmailFound == 0) {
      //only password is found
      unFoundEmail.style.display = "block";
      unFoundEmail.innerHTML = "wrong Email";
    }
  }
  loginEmailFound = 0;
  loginPasswordFound = 0;
});
