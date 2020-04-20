
function addParagraphText() {
    document.getElementById("paragraph").innerHTML = "Directs to Data Science Page!";
}

function displayInput() {
    var testInput = document.getElementById("userInput").value;

    if (testInput.length == 0) {
        document.getElementById("userInputDisplay").innerHTML = "Hey, you didn't type anything!"
    } else {
        document.getElementById("userInputDisplay").innerHTML = testInput;
    }
}
