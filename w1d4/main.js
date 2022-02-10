// loops
// for, while, do while, for in, for of
let counter = 0
while(true) {
    if(counter === 10) {
        break;
    }
    console.log('Hello world')
    counter++;
}
console.log("after while");
do {
    console.log('Hello world')
    counter++;
} while(counter < 10)
console.log('after do while')
for (let index = 0; index < 10; index++) {
    if(index === 4) {
        continue;
    }
    for (let j = 0; j < index; j++) {
        if(index === 5) {
            break;
        }
        console.log(`${index} | ${j}`);
    }
    console.log(index)
}
for (const fruit of ["mango", "orange", "grapes", "strawberry"]) {
    console.log(fruit)
}
const person = {name: 'John Doe', age: 25};
for (const [key, value] of Object.entries(person)) {
    console.log(key, value)
}
for (const key in person) {
    console.log(person[key])
}