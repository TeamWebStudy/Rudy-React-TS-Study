const clock = document.querySelector("h2#clock");

function hello() {
    console.log("Hello");
}

//setInterval(hello, 1000); // Call Function Every 1000ms (= 1s)

//setTimeout(hello, 5000); // Start Function After 5000ms (= 5s)

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);
