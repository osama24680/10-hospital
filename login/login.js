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
 
  console.log(allUsers);

  let loginEmailFound = 0;
  let loginPasswordFound = 0;
  let userName = "";
  let specialisation = "";

  if (loginEmail.value.trim() == "" && loginPassword.value.trim() == "") {
    unFoundEmail.style.display = "block";
    unFoundEmail.innerHTML = "please enter your email and password";
  
  } else if (loginEmail.value == "") {
    unFoundEmail.innerHTML = "please enter email";
    unFoundEmail.style.display = "block";
  } else if (loginPassword.value == "") {
    unFoundEmail.innerHTML = "please enter password";
    unFoundEmail.style.display = "block";
  } else {
  
    for (let i = 0; i < allUsers.length; i++) {
      if (loginEmail.value == allUsers[i].signEmailData) {
        loginEmailFound++;
        userName = allUsers[i].signNameData;
        specialisation = allUsers[i]?.specialisation;
      }
      if (loginPassword.value == allUsers[i].signPasswordData) {
        loginPasswordFound++;
        userName = allUsers[i].signNameData;
        specialisation = allUsers[i]?.specialisation;
      }
    }

    if (loginEmailFound > 0 && loginPasswordFound > 0) {
      //email and password are found
      localStorage.setItem("username", userName);
      if(specialisation){
        window.location.href = "../doctors/doctors.html";
      }else{
        window.location.href = "../index.html";
      }
     
      unFoundEmail.style.display = "none";
    } else if (loginPasswordFound == 0 && loginEmailFound > 0) {
      //only email is found
      unFoundEmail.innerHTML = "wrong password";
      unFoundEmail.style.display = "block";
    } else if (loginPasswordFound > 0 && loginEmailFound == 0) {
      //only password is found
      unFoundEmail.innerHTML = "wrong Email";
      unFoundEmail.style.display = "block";
    }
  }
  loginEmailFound = 0;
});
