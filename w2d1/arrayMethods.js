const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const r1 = nums.forEach(function (element) {
  console.log(`${element}`);
  return element;
});
console.log(r1);
const r2 = nums.map((ele) => ele * 3);

console.log(r2, nums);
const reversed = nums.reverse();
console.log(reversed, nums);
const numbers = [39, 12, 48, 29, 84, 36, 75, 45, 51];
const sorted = numbers.sort((a, b) => {
  if (a < b) return 1;
  if (a === b) return 0;
  return -1;
});
console.log(numbers, sorted);
const filtered = numbers.filter((element) => element > 35 && element < 55);
console.log(numbers, filtered);
const total = nums.reduce(
  (prevValue, currentValue) => prevValue * currentValue,
  1
);
console.log(total, nums);
