// Math
// Date
console.log(Math.PI);
function permiter(radius) {
    // 2 * PI * r
    return 2 * Math.PI * radius
}

const r1 = 100 / 3;
function difference(x, y) {
    return x - y;
}
console.log(Math.abs(difference(20, 10)))
console.log(Math.ceil(33.2))
console.log(Math.max(2, 50, 10, 3, 8))
console.log(Math.min(2, 50, 10, 3, 8))
console.log(Math.round(Math.random() * (100 - 10) + 10));
console.log(permiter(4))
console.log(permiter(6))
console.log(permiter(14))
console.log(permiter(27))

const d = new Date();
const utc = new Date().toISOString();
const utc2 = Date.now();
console.log(d, utc, utc2)
const date = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();
console.log(`${date}/${month}/${year}`);
console.log(d.toLocaleString())
console.log(d.toLocaleTimeString())