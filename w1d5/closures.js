// closures in javascript
function createCounter() {
  let counter = 0;

  function increment() {
    counter++;
    return counter;
  }

  function decrement() {
    counter--;
    return counter;
  }

  return {
    inc: increment,
    dec: decrement,
  };
}

const counter = createCounter();
console.log(counter.inc());
console.log(counter.inc());
console.log(counter.inc());
console.log(counter.dec());
console.log(counter.dec());
console.log(counter.inc());
console.log(counter.dec());
console.log(counter.inc());
console.log(counter.inc());
console.log(counter.dec());
