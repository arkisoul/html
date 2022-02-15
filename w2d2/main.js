/* let count: number = 20;
let str: string = "Hello world";
let flag: boolean = false;
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["Mango", "Apple", "Orange", "Grapes"];
let person: {name: string, age: number, hobbies: string[]} = {
    name: 'Jane Doe',
    age: 28,
    hobbies: ['Reading', 'Writing']
}

let counter: number | string | boolean;
const anyVar: any = {
  name: "Jane Doe",
  age: 28,
  hobbies: ["Reading", "Writing"],
}; */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function add(x, y) {
    return x + y;
}
var Person = /** @class */ (function () {
    function Person(name, age, height, weight, maritalStatus, hobbies) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.maritalStatus = maritalStatus;
        this.hobbies = hobbies;
    }
    Person.prototype.getHeight = function () {
        return this.height;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.incrementAge = function (value) {
        this.age = this.age + value;
    };
    Person.prototype.greet = function () {
        return "Hello, ".concat(this.name);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, height, weight, maritalStatus, hobbies, department) {
        var _this = _super.call(this, name, age, height, weight, maritalStatus, hobbies) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.increaseAge = function (num) {
        if (num) {
            return this.age + num;
        }
        else {
            return this.age++;
        }
    };
    Employee.prototype.greet = function () {
        return "Hello ".concat(this.name, ". I work in ").concat(this.department, " department");
    };
    return Employee;
}(Person));
// method overriding - polymorphism
// method overloading
var person = new Person("Jane Doe", 24, 170, 55, "Unmarried", [
    "Reading",
    "Writing",
]);
var e1 = new Employee("Jane Doe", 24, 170, 55, "Unmarried", ["Reading", "Writing"], "Software Engineering");
console.log(person.greet());
console.log(e1.greet());
