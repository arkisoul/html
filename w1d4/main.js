const bool = true;
// truty values ex. true, any number that is not zero, "a", [], {}, 
// falsy values ex. false, 0, '', undefined, null
const falsy = 1;
if(falsy) {
    console.log("not a falsy value", falsy);
} else {
    console.log('falsy value', falsy)
}
const str = "The quick fox jump over the top";
console.log(str.substr(4, 5));

/**
 * Problem statement string
 * 
 * 1. create a string
 * 2. convert that string into title case
 * 
 * ex. hello
 * Hello
 * 
 * HELLO
 * Hello
 * 
 * heLLo
 * Hello
 */