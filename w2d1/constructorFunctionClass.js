// constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.describe = function () {
  return `Hi I am ${this.name}.`;
};

// call, bind, apply
function Employee(name, age, department) {
  Person.call(this, name, age); // calling the parent constructor function
  this.department = department;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const john = new Person("John Doe", 26);
const jane = new Person("Jane Doe", 22);
const e1 = new Employee("John Doe", 26, "Software Development");
console.log(e1.describe());
console.log(jane.describe());
console.log(e1);

// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("John");
// greet("Jane");
// greet.call(null, ["Jonas", "Smith"]);
// greet.apply(null, ["Jonas"])
// const newFun = greet.bind(null, ["Jonas"])
// console.log(newFun())

// console.log(Math.min.apply(null, [1, 2, 3, 4, 5, 6, 7]));

// function add(x, y) {
//     return parseInt(x) + parseInt(y);
// }

// const add10 = add.bind(null, [10]);
// const add15 = add.bind(null, [15]);
// console.log(add10(5))
// console.log(add10(14))
// console.log(add10(21))

class Animal {
  constructor(legs, energy) {
    this.legs = legs;
    this.energy = energy;
  }

  walk() {
    this.energy = this.energy - 10;
  }
}

class Dog extends Animal {
  constructor(legs, energy) {
    super(legs, energy);
    this.talks = "Bark";
  }
}

const animal = new Animal(4, 100);
const bruno = new Dog(4, 150);
console.log(animal);
console.log(bruno);
console.log(bruno.energy);
bruno.walk();
console.log(bruno.energy);
console.log(bruno.hasOwnProperty("talks"));
console.log(bruno.hasOwnProperty("legs"));
console.log(bruno.hasOwnProperty("walk"));
for (const key in bruno) {
  if (Object.hasOwnProperty.call(bruno, key)) {
    console.log(key);
  }
}
