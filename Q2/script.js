
function checkInput() {

    var input = document.getElementById("userInput").value;
    var result = document.getElementById("result");

    if (input.trim() == "") {
        result.textContent = "Please enter a valid number!";
    }
    else if (isNaN(Number(input))) {
        result.textContent = "Please enter a valid number!";
    }
    else {
        var number = Number(input);

        if (number < 10) {
            result.textContent = "The number is lower than 10";
        }
        else if (number > 10) {
            result.textContent = "The number is higher than 10";
        }
        else {
            result.textContent = "The number is equal to 10";
        }
    }
}

document.getElementById("checkBtn").addEventListener("click", checkInput);
