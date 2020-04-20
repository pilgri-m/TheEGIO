
function promptForImage() {
    var documentName = prompt("Please select your document");
    if (documentName != "") {
        document.getElementById("test").innerHTML = "./" + documentName;
    } else {
        alert("No input selected!");
    }
}