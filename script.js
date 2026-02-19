let isLogin = true;
let progress = localStorage.getItem("progress") || 0;

document.getElementById("progressBar").style.width = progress + "%";
document.getElementById("progressText").innerText = progress + "%";

function openModal(){
  document.getElementById("authModal").style.display="flex";
}

function switchMode(){
  isLogin = !isLogin;
  document.getElementById("modalTitle").innerText = isLogin ? "Login" : "Register";
  document.querySelector(".switch").innerText = isLogin ? "No account? Register" : "Already have account? Login";
}

function login(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if(!user || !pass){
    alert("Fill all fields!");
    return;
  }

  if(isLogin){
    let storedPass = localStorage.getItem(user);
    if(storedPass === pass){
      alert("Login Successful!");
      document.getElementById("userDisplay").innerText = user;
      document.getElementById("authModal").style.display="none";
    } else {
      alert("Invalid credentials!");
    }
  } else {
    localStorage.setItem(user, pass);
    alert("Registered Successfully!");
    switchMode();
  }
}

function increaseProgress(){
  progress = parseInt(progress) + 10;
  if(progress > 100) progress = 100;

  localStorage.setItem("progress", progress);
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("progressText").innerText = progress + "%";
}

function submitForm(e){
  e.preventDefault();
  alert("Support message sent successfully!");
}

function toggleDarkMode(){
  document.body.classList.toggle("dark");
}
