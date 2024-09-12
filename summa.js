let addition = (a, b) => a + b;

let subtraction = (a, b) => a - b;

let multiplication = (a, b) => a * b;

let division = (a, b) => a / b;

let modulus = (a, b) => a % b;

let operate = (num1, operator, num2) => {
  let res;
  switch (operator) {
    case "+":
      res = addition(num1, num2);
      break;
    case "-":
      res = subtraction(num1, num2);
      break;
    case "*":
      res = multiplication(num1, num2);
      break;
    case "/":
      if (num2 === 0) {
        res = "hmm..trying to divide by 0";
      } else {
        res = division(num1, num2).toFixed(5);
      }
      break;
    case "%":
      res = modulus(num1, num2);
      break;
  }
  return res;
};

let firstNum = 0;
let operator = " ";
let secondNum = 0;
let content = false;

const display = document.querySelector("#result-display");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");
const equals = document.querySelector("#equals");

numBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (content) {
      display.textContent = "";
      content = false;
    }
    display.textContent += e.target.id;
  });
});

opBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      display.textContent = "";
      firstNum = 0;
      secondNum = 0;
      operator = " ";
    }
    if (e.target.id === "erase") {
      display.textContent = display.textContent.slice(0, -1);
      // if (content) {
      //   firstNum = Math.floor(firstNum / 10);
      // } else {
      //   secondNum = Math.floor(secondNum / 10);
      // }
    }
    if (operator !== " ") {
      secondNum = +display.textContent;
      display.textContent = operate(firstNum, operator, secondNum);
      content = true;
    }
    firstNum = +display.textContent;
    operator = e.target.id;
    content = true;
  });
});

equals.addEventListener("click", () => {
  secondNum = +display.textContent;
  display.textContent = operate(firstNum, operator, secondNum);
  operator = " ";
});
