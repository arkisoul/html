// constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.describe = function() {
    return `Hi I am ${this.name}.`
  }
}
// call, bind, apply
function Employee(name, age, department) {
  Person.call(this, name, age);
  this.department = department;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const john = new Person('John Doe', 26);
const jane = new Person('Jane Doe', 22);
const e1 = new Employee('John Doe', 26, 'Software Development');
console.log(e1.describe())
console.log(jane.describe())
console.log(e1)
const name = prompt("Enter your name")
console.log(name)
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', function(event) {
  const nameField = document.getElementById('name');
  console.log(nameField.value);
})
const nameField = document.getElementById('name');
nameField.addEventListener('keydown', function(e) {
  console.log(this.value);
})