const modeToggle = document.querySelector("#mode-toggle");
const infoForm = document.querySelector("#info-form");
const infoInput = document.querySelector("#info-form input");
const infoSubmit = document.querySelector("#info-form button");
const greeting = document.querySelector("#greeting");
const body = document.querySelector("body");

const LIGHT_MODE_CLASSNAME = "body-lightMode"
const DARK_MODE_CLASSNAME = "body-darkMode"

greeting.innerText = `Hello ${localStorage.getItem("username")} this is your Website`

function handleModeToggle() {
    if (body.className === LIGHT_MODE_CLASSNAME) {
        body.classList.remove(LIGHT_MODE_CLASSNAME);
        body.classList.add(DARK_MODE_CLASSNAME);
    } else {
        body.classList.remove(DARK_MODE_CLASSNAME);
        body.classList.add(LIGHT_MODE_CLASSNAME);
    }
}

modeToggle.addEventListener("click", handleModeToggle);

function handleSubmitUsername() {
    // 유효성 검사
    const input = infoInput.value;
    if (input === "") {
        alert("Type Your name plz");
    }
    // 저장
    localStorage.setItem("username", input)
    // UI 반영
    greeting.innerText = `Hello ${localStorage.getItem("username")} this is your Website`
}

infoSubmit.addEventListener("click", handleSubmitUsername);
