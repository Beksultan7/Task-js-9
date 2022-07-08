const button = document.querySelector(".button");
const mobile = document.querySelector(".main");
const mobile2 = document.querySelector(".main2");
console.log(mobile, mobile2);

function showMenu() {
  mobile2.classList.toggle("main");
}

button.addEventListener("click", showMenu);
