const a = 10;
let result;
if (a > 100) {
  result = "A is greater than 100";
} else {
  result = "A is less than 100";
}
// ternary operator
// condition ? value if condition is true : value if condition is false;
const b = a > 100 ? "A is greater than 100" : "A is less than 100";
console.log(result, b);

const c =
  a > 100
    ? "A is greater than 100"
    : (a < 0
    ? "A is negative"
    : "A is a positive number");
console.log(c);
