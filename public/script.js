let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  hrs.textContent =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  mins.textContent =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.textContent =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
