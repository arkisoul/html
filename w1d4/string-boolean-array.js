const bool = true;
// truty values ex. true, any number that is not zero, "a", [], {},
// falsy values ex. false, 0, '', undefined, null
const falsy = 1;
if (falsy) {
  console.log("not a falsy value", falsy);
} else {
  console.log("falsy value", falsy);
}
const str = "The quick fox jump over the top";
console.log(str.substr(4, 5));

/**
 * Problem statement string
 *
 * 1. create a string
 * 2. convert that string into title case
 *
 * ex. hello
 * Hello
 *
 * HELLO
 * Hello
 *
 * heLLo
 * Hello
 */
const x = -10.12;
const y = 2e2;
const z = x + y;
console.log(`${x} + ${y} = ${z}`);
const numbers = [12, 13, 14, 15, 16, 17];
const mixed = [12, "John", true, undefined, null];
console.log(numbers[0]);
console.log(numbers.length);
numbers[0] = 20;
console.log(numbers[0]);
console.log(numbers);
const popped = numbers.pop();
console.log(numbers, popped);
numbers.unshift(10);
const shifted = numbers.shift();
console.log(numbers, shifted);
console.log(numbers.indexOf(10));
console.log(numbers.join(" | "));


const arr = [
  "array",
  true,
  undefined,
  null,
  10,
  { name: "John Doe" },
  [1000],
  function () {
    console.log("In array");
  },
];
console.log(arr[7]());