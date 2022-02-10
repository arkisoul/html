// control statement
const a = 10;
if (a < 10) {
  console.log("a is smaller than 10");
} else if (a > 10) {
  console.log("a is greater than 10");
} else {
  console.log("a is equal to 10");
}
console.log("after if");
const fruit = "mango";
switch (fruit) {
  case "mango": {
    console.log("Fruit is mango");
    break;
  }
  default: {
    console.log("Can't determine fruit type");
    break;
  }
  case "orange": {
    console.log("Fruit is orange");
    break;
  }
  case "grapes": {
    console.log("Fruit is grapes");
    break;
  }
}
