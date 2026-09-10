const VALID_USERNAME = "vient syahneza";
const VALID_PASSWORD = "syav1e_."

const loginFrom = document.getElementById("loginFrom");
const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");
const loginMessage = document.getElementById("loginMessage");
const logoutBtn = document.getElementById("logoutBtn");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        loginMessage.textContent = "";
        loginPage.classList.add("hidden");
        homePage.classList.remove("hidden");
    } else {
        loginMessage.textContent = "Username atau password salah ♡";
        loginMessage.style.color = "#b63f67";
    }
});

logoutBtn.addEventListener("click", function () {
    homePage.classList.add("hidden");
    loginPage.classList.remove("hidden");
    loginForm.reset();
    loginMessage.textContent = "";
});