const prompt = require('prompt-sync')();
// INTRODUCTION OF JAVA SCRIPT

/**
TODO: Find Remainder
 Given two number a and b. Return the remainder when a is divided by b.
 Example 1:
 Input:
 5 8
 Output:
 5
 */

function findRemainder(a, b) {
    return a % b;
}
console.log("Add the Numbers for Find Remainder......");
const num1 = prompt('Number 1 :');
const num2 = prompt('Number 2 :');
    console.log(`Answer is : ${findRemainder(num1, num2)}`);

/**
  TODO : Sum of natural number
 * Given an interger n return the sum of all the natural numbers from 1 to n.
 * Example 1:
 * Input:
 * 5
 * Output:
 * 15
 * */

function sumOfNaturalNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log("\n Add the Numbers for Sum of Natural Number......");
const num = prompt('Number :');
    console.log(`Answer is : ${sumOfNaturalNumber(num)}`);

/**
 * TODO : Swap Number
 * Given two number a and b return number after swap value to each other.
 * Example 1:
 * Input:
 * 5 8
 * Output:
 * { a: 8, b: 5 }
 */

function swapNumber(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return `Number 1 ${ a } , Number 2 ${ b }`
}
console.log("\n Add the Numbers for Swap Number......");
let swapNumbers = prompt('Number 1 :');
let swapNumbers2 = prompt('Number 2 :');
    console.log(`Answer is : ${swapNumber(swapNumbers, swapNumbers2)}`);

