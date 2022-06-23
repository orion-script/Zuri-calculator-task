const firstNum = parseInt(prompt("Enter first number: "));
const operator = prompt("Enter choice: +, -, /, *");
const secondNum = parseInt(prompt("Enter second number: "));
const message = document.querySelector(".message");

let result;

if (operator === "+") {
  result = firstNum + secondNum;
} else if (operator === "-") {
  result = firstNum - secondNum;
} else if (operator === "/") {
  result = firstNum / secondNum;
} else if (operator === "*") {
  result = firstNum * secondNum;
} else {
  result = "Please choose an operator (+, -, /, *) ";
}

message.textContent = result;
message.style.textAlign = "center";
message.style.fontSize = "150px";
