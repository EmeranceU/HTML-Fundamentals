// console.log("Hello, World!");
let country = "India";  // Global variable(scope) isis also hoisting area
function greet() {
    console.log("Hello, " + country + "!");
}
greet();

function greetings()
{let name = "Alice";  // Local variable(scope) or function scope
    console.log("Hello, " + name);
}
greetings();

if (true) {
    age = 20; // Global variable(scope)
    console.log("My age is " + age);
}

// rediclaration and update of variable
var city = "New York";
var city = "Los Angeles"; // Rediclaration
console.log(city); // Output: Los Angeles

let state = "California";
state = "Texas"; 
console.log(state);

const pi = 3.14;
pi = 3.14159; // This will cause an error because pi is a constant
console.log(pi);

a = 10; // Implicit global variable
var a;
console.log(a);