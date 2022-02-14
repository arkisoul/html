const nums = [39, 12, 48, 29, 84, 36, 75, 45, 51]; // memorylocation ABCD001
const reversed = [].concat(nums).reverse();
console.log(reversed, nums);
const sorted = [].concat(nums).sort((a, b) => {
  if (a < b) return 1;
  if (a === b) return 0;
  return -1;
});
console.log(nums, sorted);
const r1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .map((n) => n ** 2)
  .filter((n) => n > 50)
  .reduce((a, b) => a + b, 0);
console.log(r1);
const obj = {
  name: "John Doe",
  age: 26,
  address: { street: "MG Road", city: "Mumbai" },
};
const objCopy = Object.assign({}, obj);
console.log(obj, objCopy);
objCopy["name"] = "Jane Doe";
console.log(obj, objCopy);

// In es6 version we received two new operators for array
// rest operator => denoted by three dots ...
// spread operator => denoted by three dots ...

// es8 version we received two new operators for objects
// rest operator => denoted by three dots ...
// spread operator => denoted by three dots ...

/**
 * Examples of spread operator with
 * array and objects to
 * create a copy of them
 * */
const numsSecondCopy = [...nums]; // [...arr1, ...arr2, ......., ...arrN]
const objSecondCopy = { ...obj };
// {...obj1, ...obj2, ......., ...objN}

/**
 * Examples of rest operator with
 * array and objects to
 *
 */
// const first = nums[0]
// const second = nums[1]
// const rest = nums.slice(2)
// array destructing
const [first, second, third, ...rest] = nums;
console.log(first, second, third, rest);

// const name = obj.name;
// const age = obj.age;
// object destructing {keyName: pattern}
const { name: fullName, age: personAge, ...restObj } = obj;
console.log(fullName, personAge, restObj);

Math.min(...nums); // Math.min(1,2,3,4,5,) spread operator

function add(...args) {
  // rest operator
  const total = args.reduce((a, b) => a + b, 0);
  return total;
}

console.log(add(...nums)); // spread operator
