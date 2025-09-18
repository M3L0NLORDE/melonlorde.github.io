let results = []; // store valid numeric results

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
  let x = prompt("Enter first number (Cancel to stop):");
  if (x === null) break;

  let y = prompt("Enter second number:");
  if (y === null) break;

  let op = prompt("Enter operator (+, -, *, /, %):");
  if (op === null) break;

  let result;

  // convert inputs to numbers
  let num1 = parseFloat(x);
  let num2 = parseFloat(y);

  if (isNaN(num1) || isNaN(num2)) {
    result = "wrong input number";
  } else {
    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          result = "division by zero error";
        } else {
          result = num1 / num2;
        }
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        result = "computation error";
    }
  }

  // save only valid numbers
  if (typeof result === "number" && !isNaN(result)) {
    results.push(result);
  }

  document.write("<tr><td>" + x + "</td><td>" + op + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
}
document.write("</table>");

// summary table
if (results.length > 0) {
  let min = Math.min(...results);
  let max = Math.max(...results);
  let total = results.reduce((a, b) => a + b, 0);
  let avg = total / results.length;

  document.write("<table>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
  document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
  document.write("</table>");
} else {
  document.write("<p style='text-align:center;color:red;'>No valid results to summarize.</p>");
}
