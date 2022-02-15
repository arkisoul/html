/**
 * JSON is Javascript Object Notation
 * {
 *      ""
 * }
 */

const person = { name: "John Doe", age: 26, gender: "male" };
const hobbies = ["Coding", "Contests", "Reading", "Writing"];
const hobbiesJSON = JSON.stringify(hobbies);
console.log(hobbiesJSON);
const jsonString = JSON.stringify(person)
console.log(jsonString);
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj)
const hobbiesArray = JSON.parse(hobbiesJSON);
console.log(hobbiesArray);

/**
 * Ajax
 * Asynchronus Javascript XML
 * <DOCUMENT>
 * <POSTS>
 *  <POST>
 *  <TITLE>Title value</TITLE>
 *  <DESCRIPTION>Desc value</DESCRIPTION>
 *  <USERID>Desc value</USERID>
 *  <POST>Desc value</POST>
 * </POST>
 *  <POST>
 *  <TITLE>Title value</TITLE>
 *  <DESCRIPTION>Desc value</DESCRIPTION>
 *  <USERID>Desc value</USERID>
 *  <POST>Desc value</POST>
 * </POST>
 *  <POST>
 *  <TITLE>Title value</TITLE>
 *  <DESCRIPTION>Desc value</DESCRIPTION>
 *  <USERID>Desc value</USERID>
 *  <POST>Desc value</POST>
 * </POST>
 * </POSTS>
 * </DOCUMENT>
 */

function getPosts() {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', function(e) {
        if (e.target.status === 200 && e.target.readyState === 4) {
          const response = e.target.response;
          // console.log(response);
          const responseObj = JSON.parse(response);
          const main = document.createElement("main");
          main.classList.add("grid");
          document.body.appendChild(main);
          responseObj.map((post) => {
            const parent = document.createElement("div");
            const title = document.createElement("h2");
            const desc = document.createElement("p");
            title.innerText = post.title;
            desc.innerText = post.body;
            parent.appendChild(title);
            parent.appendChild(desc);
            main.append(parent);
            return parent;
          });
        }
    })
    request.addEventListener('error', function(e) {
        console.log(e)
    })
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    // request.onreadystatechange = function(data) {
    //     if(data.target.status === 200 && data.target.readyState === 4) {
    //         console.log(typeof data.target.response)
    //         const response = data.target.response;
    //         // console.log(response);
    //         const responseObj = JSON.parse(response);
    //         const main = document.createElement("main");
    //         main.classList.add('grid');
    //         document.body.appendChild(main)
    //         const html = responseObj.map(post => {
    //             const parent = document.createElement('div');
    //             const title = document.createElement('h2');
    //             const desc = document.createElement('p');
    //             title.innerText = post.title;
    //             desc.innerText= post.body;
    //             parent.appendChild(title);
    //             parent.appendChild(desc);
    //             main.append(parent)
    //             return parent;
    //         })
    //     }
    // }
    request.send()
}


const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const form = document.getElementById('userform');
    const inputs = form.querySelectorAll('input');
    const data = { userId : 1 };
    inputs.forEach((input) => {
        data[input.name] = input.value;
    })
    console.log(data);
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function (e) {
        console.log(e.target.readyState, e.target.response);
    });
    request.addEventListener("error", function (e) {
      console.log(e);
    });
    request.open("POST", "https://jsonplaceholder.typicode.com/posts");
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(data));
})