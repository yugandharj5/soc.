/*console.log("=== hour1: json basics");
let student = {
    name:"vicky",
    age:22,
    marks:[70,46,50]
};
let jsonString = JSON. stringify(student);
console.log("JSON string:",jsonString);

let parsedObj = JSON.parse(jsonString);
console.log ("parsed object:", parsedObj);

book = { 
    title:"zero to one",
    author:"peter",
    price:250,
    books:["joy","happy","toy"],
};

let jsonString = JSON. stringify(book);
console.log("JSON OBJECTS:",jsonString);
 
let parsedObj = JSON.parse(jsonString);
console.log ("parsed object:", parsedObj);
*/
console.log("=== hour2: AJAX with fetch===");
fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then(response => response.json())
 .then(data => console.log("fetched data:",data))
 .catch(error => console.error("error:",error));

 console.log("=== hour2: AJAX with fetch===");
fetch("https://jsonplaceholder.typicode.com/posts/")
 .then(response => response.json())
 .then(data => console.log("fetched data:",data))
 .catch(error => console.error("error:",error));
 /*console.log("=== hour1: json basics");
let student = {
    name:"vicky",
    age:22,
    marks:[70,46,50]
};
let jsonString = JSON. stringify(student);
console.log("JSON string:",jsonString);

let parsedObj = JSON.parse(jsonString);
console.log ("parsed object:", parsedObj);

book = { 
    title:"zero to one",
    author:"peter",
    price:250,
    books:["joy","happy","toy"],
};

let jsonString = JSON. stringify(book);
console.log("JSON OBJECTS:",jsonString);
 
let parsedObj = JSON.parse(jsonString);
console.log ("parsed object:", parsedObj);
*/
console.log("=== hour2: AJAX with fetch===");
fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then(response => response.json())
 .then(data => console.log("fetched data:",data))
 .catch(error => console.error("error:",error));

 console.log("=== hour2: AJAX with fetch===");
fetch("https://jsonplaceholder.typicode.com/posts/")
 .then(response => response.json())
 .then(data => console.log("fetched data:",data))
 .catch(error => console.error("error:",error));

 fetch("https://jsonplaceholder.typicode.com/users")
 .then(response => response.json())
 .then(data => console.log("fetched data:",data))
 .catch(error => console.error("error:",error));
    

 fetch("https://jsonplaceholder.typicode.com/users")
   .then(res => res.json())
   .then(users => {
     let output = "<h3>user List</h3><ul>";
     users.forEach(user => {
       output += `<li>${user.name} -  ${user.email}</li>`;
    });
    output =+ "</ul>";
    document.body.innerHTML += output;
});

console.log("=== weather info featcher project===");

const citycoords = {
    "bangalore": {lat: 12.97, lon: 77.59 },
    "delhi": { lat: 28.61, lon:76.76},
    "mumbai": {lat: 14.37, lon: 67.59 },
    "atp": {lat: 10.97, lon: 67.59 },
};

document.getElementryId("feather").addEventListener
("click", () => {
    let city = document.getElementById
}0.3




