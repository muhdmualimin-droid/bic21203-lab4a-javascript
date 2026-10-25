
var paragraph = document.getElementById("message");
var button = document.getElementById("changeBtn");

function changeMessage() {
    paragraph.textContent = "Hello there!";
}

button.addEventListener("click", changeMessage);
