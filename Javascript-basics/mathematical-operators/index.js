// // Mathematical operators in JavaScript
// let itemPrice = 25;
// let tax = 5;

// let total1 =  itemPrice + tax; //Addition
// console.log(total1);

// let total2 = itemPrice - tax; //Subtraction
// // total2 = itemPrice + tax; //Update the value of total2
// console.log(total2);

// let total3 = itemPrice * tax; //Multiplication
// console.log(total3);

// let total4 = itemPrice / tax;   //Division
// console.log(total4);

// let total5 = itemPrice ** tax;  //Exponentiation
// console.log(total5);

// let total6 = itemPrice % tax;   //Modulus
// console.log(total6);



let flourWeight = 500; // in grams
let sugarWeight = 200; // in grams

let totalWeight = flourWeight + sugarWeight; // Total weight
console.log("Total weight: " + totalWeight + " grams");

let batches = 3; // Number of batches
let weightperbatch = totalWeight / batches;
console.log("Weight of each batch: " + weightperbatch + " grams");

let remainingWeight = weightperbatch % batches;
console.log("Remaining weight: " + remainingWeight + " grams");

// let totalWeigntInBatches = totalWeight / 3; // Weight of each batch
// console.log("Weight of each batch: " + totalWeigntInBatches + " grams");

// let remainingWeight = totalWeight % 3; 
// console.log("Remaining weight: " + remainingWeight + " grams");

let a= 10;
a ++; // Increment operator
console.log(a); 


let bankBalance =1000;
bankBalance += 500; // Addition assignment operator
console.log("Balance: " + bankBalance);

bankBalance -= 150; // Subtraction assignment operator
console.log("Balance: " + bankBalance);

bankBalance *= 2; // Multiplication assignment operator
console.log("Balance: " + bankBalance);

bankBalance /= 2; // Division assignment operator
console.log("Balance: " + bankBalance);


let x = 5;
let y = "5";

console.log(x == y); // Output: true (loose equality)
console.log(x === y); // Output: false (strict equality)
console.log(x != y); // Output: false (loose inequality)
console.log(x !== y); // Output: true (strict inequality)




let userAge = 21;
console.log(userAge===21); 
console.log(userAge>=18); 
console.log(userAge!==13);


let hasTicket = true;
let isVip = false;

console.log(hasTicket && isVip); // And operator both should be true 
console.log(hasTicket || isVip); // Or operator either one should be true
console.log(!isVip);  // Not operator



let carTotal =10;
let isPremiumMember = true;
let hasDiscountCode = true;
let isFraudulent = false;
console.log((carTotal > 100 || isPremiumMember) && !isFraudulent); 

