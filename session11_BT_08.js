let a = parseFloat(prompt("Mời bạn nhập vào số a: "));
let b = parseFloat(prompt("Mời bạn nhập vào số b: "));
let c = prompt("Mời bạn nhập vào phép tính (+, -, *, /) ");
let d = 0;
switch (c) {
  case "+":
    d = a + b;
    break;
  case "-":
    d = a - b;
    break;
  case "*":
    d = a * b;
    break;
  case "/":
    d = a / b;
    break;
}
document.write(a + " " + c + " " + b + " = " + d);
