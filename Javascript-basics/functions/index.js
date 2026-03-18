// let a = 5;
// let b = 10;

// sum = a + b; // Addition
// console.log("Sum: " + sum);


function calculateSum(x, y) { //function declaration(parameters)
    return x + y;
}
calculateSum(5, 10); // Calling the function with arguments

function calculateDifference(c) {
    return calculateSum(5, 10) -c;
}
console.log(calculateDifference(3)); 

function checkEvenOdd(num){
    if (num % 2 === 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
}
checkEvenOdd(5);

const fn = function(x, y) {
    return x -y;
}
console.log(fn(3, 2));




typeof 'eme'