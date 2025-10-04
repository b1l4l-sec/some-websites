// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById("display");

    // Prevent multiple operators or decimals in a row
    if (/[+\-*/.]{2}$/.test(display.value + value)) return;

    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result and display it
function calculateResult() {
    const display = document.getElementById("display");
    let expression = display.value;

    try {
        // Validate the expression
        if (/^[0-9+\-*/.()]+$/.test(expression)) {
            let result = eval(expression);
            display.value = result;
            
            // Trigger animation only when result is displayed
            triggerAnimation();
        } else {
            display.value = "Error";
        }
    } catch (e) {
        display.value = "Error";
    }
}

// Function to trigger the animation
function triggerAnimation() {
    const display = document.getElementById("display");

    // Add animation class
    display.classList.add('animate-display');

    // Remove animation class after animation duration
    setTimeout(() => {
        display.classList.remove('animate-display');
        display.classList.add('animate-display-reset');
        setTimeout(() => display.classList.remove('animate-display-reset'), 300);
    }, 300);
}

// Prevent any non-numeric key press in the display field
document.getElementById("display").addEventListener('keydown', function(e) {
    e.preventDefault();
});
