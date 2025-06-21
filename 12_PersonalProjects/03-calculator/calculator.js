// let display = document.getElementById("display");
// let buttons = document.querySelectorAll("button");
// let expression = "";

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     let value = button.textContent;

//     if (value === "C") {
//       expression = "";
//     } else if (value === "=") {
//       try {
//         expression = eval(expression).toString();
//       } catch {
//         expression = "Error";
//       }
//     } else {
//       expression += value;
//     }

//     display.value = expression;
//   });
// });

let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    const lastChar = currentInput.slice(-1);

    const isOperator = /[+\-*/]/;

    if (value === "C") {
      currentInput = "";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
    } else {
      if (isOperator.test(value)) {
        // Prevent starting with operator (except '-')
        if (currentInput === "" && value !== "-") return;

        // Prevent consecutive operators
        if (isOperator.test(lastChar)) return;
      }

      currentInput += value;
    }

    display.value = currentInput;
  });
});

document.addEventListener("keydown", function (e) {
  const key = e.key;
  const isOperator = /[+\-*/]/;
  const lastChar = currentInput.slice(-1);

  if (key >= "0" && key <= "9" || key === ".") {
    currentInput += key;
  } else if (isOperator.test(key)) {
    if (currentInput === "" && key !== "-") return;
    if (/[+\-*/]/.test(lastChar)) return;
    currentInput += key;
  } else if (key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
  } else if (key === "Escape" || key.toLowerCase() === "c") {
    currentInput = "";
  }

  display.value = currentInput;
});
