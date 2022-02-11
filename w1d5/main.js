const person = {
  type: "Person",
  describe: function () {
    return `Hi, I'm ${this.name}. I am ${this.age} year old.`;
  },
  location: function () {
    return `I stay in ${this.address.city} city`;
  },
};

const john = Object.create(person);
john.name = "John Doe";
john.age = 25;
john.height = 172;
john.weight = 56;
john.gender = "Male";
john.isMarried = true;
john.hobbies = ["reading", "writing", "coding"];
john.address = {
  street: "M G Road",
  city: "Mumbai",
  country: "India",
  pincode: 400078,
};

const jane = Object.create(person);
jane.name = "Jane Doe";
jane.age = 22;
jane.height = 172;
jane.weight = 56;
jane.gender = "Female";
jane.isMarried = true;
jane.hobbies = ["reading", "writing", "coding"];
jane.address = {
  street: "M G Road",
  city: "Mumbai",
  country: "India",
  pincode: 400078,
};
jane.type = "Super woman"
jane.describe = function () {
  return "I have changed the describe method"
}

console.log(john.describe());
console.log(john.location());
console.log(jane.describe());
console.log(jane.location());
console.log(jane.type);
console.log(john.type);
console.log(john);
console.log(jane);
// prototype is a special property that is available on all the objects
// using this prototype we can share methods among objects.
console.log(john.hasOwnProperty("describe"));
// console.log(Object.getPrototypeOf(john))
// console.log(Object.getPrototypeOf(jane))
// String
// Array
// Object
