
let currentUser =localStorage.getItem("currentUser")==null?{}: JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("title").innerHTML = `welcome " ${currentUser.userName} " ! Enjoy`;


document.getElementById("logout").addEventListener("click", function () {
  localStorage.setItem("currentUser","");
  window.open("index.html","_self")
});