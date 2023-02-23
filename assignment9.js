const prompt = require('prompt-sync')();
// Function Programming

/*
TODO: Composition Function
Medium
Create a simple javascript composition function that adds a number x with 5 and divides it with 2 and print the output of that composition function.

Example 1:
Input:
composition(5)

Output:
5

Explanation:
Inside composition function, the number is added to 5 in separate function and then divided by 2 in separate function, hence the output of the composition function.
 */

function composition(x) {
    return x;
}

console.log("add number : ")
let x = prompt("Enter number : ");
console.log(`Answer : ${composition(x)}`);


/*
TODO: Pure Function
Create a Pure Function that multiplys 2 numbers.
Example 1:
Input:
2 4
Output:
8
Explanation:
It returns the multiplication of two numbers, hence the output.
 */

function pureFunction(x, y) {
    return x * y;
}

console.log("multiply two numbers : ")
let x1 = prompt("Enter first number : ");
let y1 = prompt("Enter second number : ");
console.log(`Answer : ${pureFunction(x1, y1)}`);


/*
TODO: List of Even Numbers
Using the high order filter function, which would receive the even function and would return a list of even numbers. Note: Even function is a function which would return true if the input parameter is even.
Example 1:
Input:
const listOfNumbers = [0,1,2,3,4,5,6,7,8,9,10];
Output:
[0, 2, 4, 6, 8, 10 ]
Explanation:
Filter function would filter the numbers based on true returning from the even function, hence the output.
 */

function even(x) {
    return x % 2 == 0;
}

function listOfEvenNumbers(listOfNumbers) {
    return listOfNumbers;
}

const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Answer : ${listOfEvenNumbers(listOfNumbers)}`);



