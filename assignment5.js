const prompt = require('prompt-sync')();
// Conditionals and Statements
/*
TODO: Even or Odd
Write a JavaScript program that checks if input number is even or odd by using “%” operator in JavaScript.
Example 1:
Input:
17.5
Output:
false
Explanation:
17.5 is an odd number, thus answer is false.
 */
function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log("Entre a number to check if it is even or odd");
let num = prompt("Number: ");
console.log(`Answer is : ${isEvenOrOdd(num)}`);

/*
TODO: If Number
Write a JavaScript program that checks if input variable is a number by using isNaN() in-built JavaScript function.
Example 1:
Input:
42F
Output:
false
 */

function isNumber(num) {
    if (isNaN(num)) {
        return false;
    }
    else {
        return true;
    }
}
console.log("Entre a number to check if it is a number");
let nums = prompt("Number: ");
console.log(`Answer is : ${isNumber(nums)}`);

/*
Display Large Integer
Write a JavaScript program that accept three integers and return the maximum among them.
Example 1:
Input:
var num1 = 5 var num2 = 10
Output:
The larger of 5 and 10 is 10.
Explanation:
The larger integer out of 5 and 10 is 10, hence the output.
 */

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log("Entre three numbers to check which one is the largest");
let num1 = prompt("Number 1: ");
let num2 = prompt("Number 2: ");
let num3 = prompt("Number 3: ");
console.log(`The largest number is : ${maxOfThree(num1, num2, num3)}`);
