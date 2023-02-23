const prompt = require('prompt-sync')();
/*
Implementing Sum
Easy
Given three integer a,b and c . Implement a javascript function as sum(a)(b)(c) which should sum the numbers and return it.

Example 1:
Input:
sum(1)(2)(3)

Output:
6

Explanation:
Function sum returns 1, 2 and 3 value at call and sum these returned values and returns the output.
 */

function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

let a = parseInt(prompt("Enter a value: "));
let b = parseInt(prompt("Enter b value: "));
let c = parseInt(prompt("Enter c value: "));

console.log(`Answer Is ${sum(a)(b)(c)}`);

