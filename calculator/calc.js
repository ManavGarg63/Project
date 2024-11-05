// Function to display the clicked value
function display(val) { 
	document.getElementById("result").value += val; 
} 

// Function to solve the expression
function solve() { 
	try {
		let result = document.getElementById("result").value;
		document.getElementById("result").value = math.evaluate(result);
	} catch (e) {
		document.getElementById("result").value = "Error";
	}
} 

// Function to clear the display
function clearDisplay() { 
	document.getElementById("result").value = ""; 
} 

// Event listener for keypresses
document.addEventListener("keydown", function(event) {
	const allowedKeys = '0123456789+-*/.';
	if (allowedKeys.includes(event.key)) {
		display(event.key);
	} else if (event.key === "Enter") {
		solve();
	} else if (event.key === "Escape") {
		clearDisplay();
	}
});
