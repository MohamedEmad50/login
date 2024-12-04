const email = document.getElementById("email");
const password = document.getElementById("password");

let Users =
  localStorage.getItem("Users") == null
    ? []
    : JSON.parse(localStorage.getItem("Users"));

let currentUser = localStorage.getItem("currentUser");
currentUser = currentUser == null ? {} : JSON.parse(currentUser);

function Home() {
  window.open("home.html", "_self");
}
function removeMessage() {
  document.getElementById("wrong").classList.add("d-none");
  document.getElementById("incorrect").classList.add("d-none");
}
function login() {
  if (email.value === "" || password.value === "") {
    document.getElementById("wrong").classList.remove("d-none");
    document.getElementById("incorrect").classList.add("d-none");
  }

  for (let i = 0; i < Users.length; i++) {
    if (email.value == Users[i].email && password.value == Users[i].password) {
      document.getElementById("incorrect").classList.add("d-none");
      document.getElementById("wrong").classList.add("d-none");
      currentUser = Users[i];
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      Home();
    } else if (i == Users.length - 1) {
      document.getElementById("incorrect").classList.remove("d-none");
    }
  }
}
