const Name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
let Users =localStorage.getItem("Users")==null?[]: JSON.parse(localStorage.getItem("Users"));
let currentUser = {};
validationInputs = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^\w{5,}$/,
  Name: /^[a-zA-Z0-9_]{5,}$/,
};
function removeMessage() {
  document.getElementById("wrong").classList.add("d-none");
  document.getElementById("incorrect").classList.add("d-none");
}

Name.addEventListener("input", function () {
  if (!validationInputs.Name.test(Name.value)) {
    Name.nextElementSibling.classList.remove("d-none");
  }
  else {
     Name.nextElementSibling.classList.add("d-none");
  }
})

function checkEmial(email) {
  for (let i = 0; i < Users.length; i++){
    if (email === Users[i].email) {
      return true;
    }
  }
 return false;
}
email.addEventListener("input", function() {
  if (!validationInputs.email.test(email.value)||checkEmial(email.value)) {
    email.nextElementSibling.classList.remove("d-none");
  }
  else {
     email.nextElementSibling.classList.add("d-none");
  }
})
password.addEventListener("input", function () {
    if (!validationInputs.password.test(password.value) ) {
      password.nextElementSibling.classList.remove("d-none");
    } else {
      password.nextElementSibling.classList.add("d-none");
    }
})
function validation() {
  if (email.value === "" || password.value === "" || Name.value === "") {
    document.getElementById("wrong").classList.remove("d-none");
    document.getElementById("incorrect").classList.add("d-none");
    return false;
  } else if (
    validationInputs.Name.test(Name.value) &&
    validationInputs.email.test(email.value) &&
    validationInputs.password.test(password.value)
  ) {
    return true;
  }
  return false;
}
function signUP() {
  if (validation()) {
    let User = {
      userName: Name.value,
      email: email.value,
      password:password.value
    }
    currentUser = User;
    Users.push(User);
    localStorage.setItem("Users", JSON.stringify(Users));
    window.open("index.html", "_self");
  }
}
