// Receive a number and continue receiving numbers until a zero is entered. 
// When a zero is entered, output how many positive and negative numbers have been entered, and then stop.

var positiveCount = 0;
var negativeCount = 0;
var input, number, result;

// function to analyze numbers 
function analyzeNumbers() {
    input = document.getElementById("numberInput").value;
    number = parseInt(input);

    if (isNaN(number)) {
        alert("Please enter a valid number");
        return; // Exit the function if input is not a number
    }

    // count positive, negative numbers
    if (number > 0) {
        positiveCount++;
    } else if (number < 0) {
        negativeCount++;
    }

    if (number === 0) { // output result when 0 entered
        result = document.getElementById("result");
        result.innerHTML = "Positive numbers entered: " + positiveCount + "<br />" +
                           "Negative numbers entered: " + negativeCount;
    }

    document.getElementById("numberInput").value = "";
}

// function to analyze numbers when the button is clicked
function myButtonHandler() {
    analyzeNumbers(); 
}

// assign the button handler function to the onclick event of the button
document.getElementById("myButton").onclick = myButtonHandler;