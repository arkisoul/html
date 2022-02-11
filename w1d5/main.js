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