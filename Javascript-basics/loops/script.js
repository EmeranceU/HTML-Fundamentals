// loops

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//only even numbers

for (let i = 1; i <= 20; i++) {
    if ( i % 2 === 0){
        console.log(i);
    }
}

const days = ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"]; 
for (let i =0 ; i< days.length; i++) {
    if (i <= 4){
        console.log ("checking email for" + " " + days[i]);
    } continue;

}

// decrement 

for (let count = 10 ; count > 0; count--){
    console.log(count);
}


// while loop

let roll = 1;
while (roll !== 6){
    roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}
console.log("You rolled a 6!");

let constant = 1;
while (constant <=5){
    console.log(constant);
    constant++;
}

let correctPin =1234;
let enteredPin = 0;

while (enteredPin !== correctPin){
    console.log("Please enter the correct pin");
    enteredPin = prompt("Enter the pin");
    break;
}
console.log("Pin accepted.");


// do...while loop

let i = 0;
do {
    console.log (i);
    i++;
}while (i<5);

