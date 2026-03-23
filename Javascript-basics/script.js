// console.log("Hello, World!");
let country = "India";  // Global variable(scope) isis also hoisting area
function greet() {
    console.log("Hello, " + country + "!");
}
greet();

function greetings(){
    let name = "Alice";  // Local variable(scope) or function scope
    console.log("Hello, " + name);
}
greetings();

if (true) {
    age = 20; // variable(scope)
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
console.log(pi);

let a;
console.log(a); //TDZ(Temporal Dead Zone)
a = 10; 

// two symbols with same description
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // Output: false


//today take aways
// 1. Variables can be declared using var, let, and const.
// 2. var has function scope and is hoisted, while let and const have block scope and are not hoisted.
// 3. let allows for variable reassignment, while const does not allow reassignment after initialization.
// 4. Variables declared with var can be redeclared, while let and const cannot be redeclared in the same scope.
// 5. Symbols are unique and immutable data types that can be used as identifiers for object properties.
// 6. TDZ (Temporal Dead Zone) is a period of time during which a variable is not accessible before it is declared.