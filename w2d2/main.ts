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

function add(x: number, y: number): number {
  return x + y;
}

class Person {
  public name: string;
  protected age: number;
  private height: number;
  weight: number;
  maritalStatus: string;
  hobbies: string[];

  constructor(
    name: string,
    age: number,
    height: number,
    weight: number,
    maritalStatus: string,
    hobbies: string[]
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.maritalStatus = maritalStatus;
    this.hobbies = hobbies;
  }

  public getHeight(): number {
    return this.height;
  }

  public getAge(): number {
    return this.age;
  }

  protected incrementAge(value: number) {
    this.age = this.age + value;
  }

  public greet(): string {
    return `Hello, ${this.name}`;
  }
}

class Employee extends Person {
  public department: string;

  constructor(
    name: string,
    age: number,
    height: number,
    weight: number,
    maritalStatus: string,
    hobbies: string[],
    department: string
  ) {
    super(name, age, height, weight, maritalStatus, hobbies);
    this.department = department;
  }

  increaseAge(num?: number): number {
    if (num) {
      return this.age + num;
    } else {
      return this.age++;
    }
  }

  public greet(): string {
    return `Hello ${this.name}. I work in ${this.department} department`;
  }
}
// method overriding - polymorphism
// method overloading
const person: Person = new Person("Jane Doe", 24, 170, 55, "Unmarried", [
  "Reading",
  "Writing",
]);
const e1: Employee = new Employee(
  "Jane Doe",
  24,
  170,
  55,
  "Unmarried",
  ["Reading", "Writing"],
  "Software Engineering"
);
console.log(person.greet());
console.log(e1.greet());

class Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  constructor() {

  }

  updatedTitle(title: string) {
    this.title = title;
  }
}

const posts: any[] = [
  { id: 1, title: "Title 1", body: "Lorem ipsum", userId: 1 },
  { id: 2, title: "Title 2", body: "Lorem ipsum", userId: 1 },
  { id: 3, title: "Title 3", body: "Lorem ipsum", userId: 1 },
  { id: 4, title: "Title 4", body: "Lorem ipsum", userId: 1 },
  { id: 5, title: "Title 5", body: "Lorem ipsum", userId: 1 },
  { id: 6, title: "Title 6", body: "Lorem ipsum", userId: 1 },
];

const mappedArr = posts.map((post: Post) => {

})
