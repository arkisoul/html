const header = document.getElementById("header");
const footer = document.getElementById("footer");
console.log(document.querySelectorAll("[name='email']"));
header.style.backgroundColor = "#888888";
footer.style.color = "green";
footer.classList.add('footer-class');
// window.location = "https://google.com";
// console.log(window);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Submit button clicked');
})
let fullName = 'John Doe';
window.document.write('Hello world')
console.log(window)
header.innerHTML = fullName;