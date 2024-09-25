const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault(); // 이벤트의 기본 동작(새로고침)을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

//1. Event가 발생하면 브라우저에서 onLoginSubmit 라는 이름의 함수를 호출한다.
//2. onLoginSubmit()이 아닌, onLoginSubmit(object{})의 형태로 호출한다.
//3. 추가적인 매개변수를 넣어서 호출한다.
//4. object에는 event에 관한 정보가 존재한다.

const link = document.querySelector("a");

function handleClick(event) {
    event.preventDefault();
    console.dir(event)
}

link.addEventListener("click", handleClick);