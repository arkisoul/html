var foo = 'small "hello world" \' \n \t foo';
var Foo = "Capital 'hello world' \" \n \t Foo";
var templateLiteral = `Hello world
lorem
ipsum "" ${foo} ${Foo} ${10 + 20}
    'lorem ipsum is a dummy text'`;
var fname;
var lname = null;
lname = "Doe";
fullName = "John Doe";
function demo() {
  let varName = "Hello world!";
  varName = 10;
  {
    let varName = "Name";
    var insideIf = "True";
    let letInsideIf = "True";
  }
  console.log(varName, insideIf);
}
demo();
// console.log(varName); // throws an ReferenceError
{
  let letVar;
  letVar = "Hello world";
  const constVar = "init";
  // console.log(constVar)
  // constVar = "hello world" // throw an TypeError: Assignment to constant variable
}
{
  const constVar = "init";
}
// console.log(letVar, constVar) // throws an ReferenceError
console.log(foo, Foo);
console.log(fname, typeof fname, typeof foo);
console.log(lname, typeof lname);
console.log(templateLiteral);
/**
 * Identifiers
 * 1. It can have alphanumeric and underscore
 * 2. We can't start a variable name with number
 * 3. We can have underscore as first letter
 * 4. Identifier names are case sensitive
 */

/**
 * Data types
 *
 * Primitive data types
 * Boolean - true, false
 * String - "", '', `` (template literals introduced in es6)
 * Number - 1, 1.0
 * undefined -
 * null
 *
 * Array
 * Object
 * Set
 * Map
 * Weakmap
 *
 */
