
var button = document.getElementById("generateBtn");
var list = document.getElementById("numberList");

function generateNumbers() {

    list.textContent = "";

    for (var i = 1; i <= 5; i++) {

        var item = document.createElement("li");

        item.textContent = "The number is " + i;

        list.appendChild(item);
    }
}

button.addEventListener("click", generateNumbers);
