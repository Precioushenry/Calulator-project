// Get the input text area element
var inputTextArea = document.getElementById('text-area');

// Function to update the input text area with the clicked button's text
function updateInputText(button) {
  inputTextArea.value += button.textContent;
}

// Function to calculate the result
function calculateResult() {
  var expression = inputTextArea.value;

  try {
    // Evaluate the expression using JavaScript's eval() function
    var result = eval(expression);

    // Update the input text area with the result
    inputTextArea.value = result;
  } catch (error) {
    // Display an error message if there is an error in the expression
    alert('Invalid expression');
  }
}

// Add click event listeners to the number buttons
var numberButtons = document.querySelectorAll('.btn');
numberButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    updateInputText(button);
  });
});

// Add click event listener to the addition button
var additionButton = document.querySelector('.input-text2 .btn1');
additionButton.addEventListener('click', function() {
  updateInputText(additionButton);
});

// Add click event listener to the subtraction button
var subtractionButton = document.querySelector('.input-text3 .btn1');
subtractionButton.addEventListener('click', function() {
  updateInputText(subtractionButton);
});

// Add click event listener to the division button
var divisionButton = document.querySelector('.input-text4 .btn1:nth-child(2)');
divisionButton.addEventListener('click', function() {
  updateInputText(divisionButton);
});

// Add click event listener to the multiplication button
var multiplicationButton = document.querySelector('.input-text4 .btn1:nth-child(3)');
multiplicationButton.addEventListener('click', function() {
  updateInputText(multiplicationButton);
});

// Add click event listener to the equals button
var equalsButton = document.querySelector('.input-text5 .btn1:nth-child(2)');
equalsButton.addEventListener('click', function() {
  calculateResult();
});
// Get the CLEAR button element
var clearButton = document.querySelector('.input-text5 .btn1');

// Get the text area element
var textArea = document.getElementById('text-area');

// Add a click event listener to the CLEAR button
clearButton.addEventListener('click', function() {
  // Clear the input in the text area
  textArea.value = '';
});
