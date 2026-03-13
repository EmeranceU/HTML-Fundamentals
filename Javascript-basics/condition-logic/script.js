

// if conditon

let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}


let number = 10;
if (number >0){
    console.log("The number is positive");
}

let Age = 16;
if (Age >= 18) {
    console.log("You are able to vote");
} else {
    console.log("You cannot vote yet");
}

let score = 50;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}      


let light = "red";

if (light === "green"){
    console.log("Go");
}
else if (light === "yellow"){
    console.log("slow down");
}
else if (light === "red"){
    console.log("Stop");
}
else{
    console.log("Invalid traffic light color");
}

// nested conditions

// let userName = "admin";
// let password = "1234";

// if (userName === "adminh") {
//     if (password === "1234") {
//         console.log("Login successful");
//     } else {
//         console.log("Invalid password");
//     }
// } else {
//     console.log("user not found");
// }

// assignment operators by the use of && and ||

let userName ="admin";
let password = "12345";

if (userName ==="admin" && password === "1234"){
    console.log ("Login successful");
}else {
    console.log("Invalid username or password");
}


// switch statement

let day = "Monday";
switch (day) { //parameter
    case "Monday":
        console.log("start of the week");
        break;

    case "friday":
        console.log("end of the week");
        break;
    case "saturday":
        console.log("weekend");
        break;

    default:
        console.log("Regular day");
}

// swith cases in simple menu system

let food = "burger";

switch (food) {
    case "Pizza":
        console.log("You ordered Pizza");
        break;
    case "bread":
        console.log("You ordered bread");
        break;
    case "salad":
        console.log("You ordered salad");
        break;
    default:
        console.log("Food item not available");
}


let foodItem = "pizza";
let quantity = 2;
let totalPrice;
let pizzaPrice = 30; 
let pricePerItem = 10; // Assuming each item costs $10

switch (foodItem) {
    case "burger":
        totalPrice = quantity * pricePerItem;

        if (totalPrice > 50) {
            console.log("You get a discount!");
        }else{
            console.log("Total price: $" + totalPrice);
        }
        break;
    case "pizza":
        totalPrice = quantity * pizzaPrice;

        if (totalPrice > 50) {
            console.log("You get a discount!");
        }else{
            console.log("Total price: $" + totalPrice);
        }

        break;
    case "salad":
        totalPrice = quantity * pricePerItem;

        if (totalPrice > 50) {
            console.log("You get a discount!");
        }else{
            console.log("Total price: $" + totalPrice);
        }
        break;
    
    default:
        console.log("Food item not available");
        totalPrice = 0;
}

