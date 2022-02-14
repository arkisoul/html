function toTitleCase(str) {
    if(!str) { return 'Missing mandatory parameter' }

    const words = str.split(" ");
    const titleCaseWords = [];
    for (const word of words) {
        const titleCaseWord = word[0].toUpperCase() + word.substring(1).toLowerCase();
        titleCaseWords.push(titleCaseWord);
    }
    const titleCaseStr = titleCaseWords.join(" ");
    return titleCaseStr;
}

const r1 = toTitleCase()
console.log(r1);
const r2 = toTitleCase("")
console.log(r2);
const r3 = toTitleCase("HELLO")
console.log(r3);
const r4 = toTitleCase("hELlO")
console.log(r4);
const r5 = toTitleCase("HELLO World")
console.log(r5);
const r6 = toTitleCase("heLLo WORLD")
console.log(r6);
const r7 = toTitleCase("the quick laZy fox jumP over tHe box");
console.log(r7);