// function declaration
function add10(x) {
  const total = x + 10;
  return total;
  console.log(total, isNaN(total));
}
const a0 = add10(20); // 30
const a1 = add10(40); // 50
const a2 = add10(90); // 100
const a3 = add10(); // no error for missing parameter

const sum = add10(20);
console.log(add10(20), sum);

function substract(x, y) {
  const result = x - y;
  return result;
}

const r1 = substract(20, 10);
const r2 = substract(200, 240);
console.log(r1);
console.log(r2);

// function expression
const multiply = function () {
  const result = 10 * 20;
  return result;
}
const difference = substract;
console.log(multiply())
console.log(difference(30, 10))
console.log(typeof multiply)
// when we don't provide a name to a function, it is called anonymous function

// arrow function => introduced in es6 or ECMAScript2015
const divide = () => {
  const result = 120 / 5;
  return result;
};
// demoDivide () => {
//   const result = 120 / 5;
//   return result;
// }

console.log(divide())