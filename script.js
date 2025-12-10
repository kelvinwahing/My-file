// Display year
document.getElementById("year").textContent = new Date().getFullYear();

// LOGIN SYSTEM
function login() {
  const user = document.getElementById("login-username").value;
  const pass = document.getElementById("login-password").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
    localStorage.setItem("logged", "yes");
  } else {
    alert("Incorrect username or password!");
  }
}

// Keep logged in
if (localStorage.getItem("logged") === "yes") {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("portfolio").style.display = "block";
}

// LOGOUT
function logout() {
  localStorage.removeItem("logged");
  location.reload();
}

// SEND EMAIL
function sendEmail(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  window.location.href = `mailto:kelvinwahing18@gmail.com?subject=${subject}&body=${body}`;
}
