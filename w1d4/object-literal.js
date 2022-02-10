// object literal
// key: value pair
const person = {
  name: "John Doe",
  age: 25,
  height: 172,
  weight: 56,
  gender: "Male",
  isMarried: true,
  hobbies: ["reading", "writing", "coding"],
  address: {
    street: "M G Road",
    city: "Mumbai",
    country: "India",
    pincode: 400078,
  },
};
console.log(person.name);
console.log(person.hobbies[0]);
console.log(person.address.pincode);
const key = "name";
console.log(person[key]);
console.log(person["hobbies"][0]);
console.log(person["address"]["pincode"]);
console.log('hobbies' in person);
