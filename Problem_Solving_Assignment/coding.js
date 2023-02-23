const prompt = require('prompt-sync')();
/*
First Character Uppercase
Write a JavaScript program to test the first character of a string is uppercase or not using regular expression.
Example 1:
Input:
uppercaseTest('abcd')
Output:
false
Explanation:
The program returns false because the character at position 0 is not uppercase.
 */

function uppercaseTest(str) {
    let regex = /^[A-Z]/;
    return regex.test(str);
}

let str = prompt("Enter a String: ");
console.log(uppercaseTest(str));

//--------------------------------------------------------------------------------------------------------------------//

/*
Greatest Common Divisor (JS)
Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers using recursion.
Example 1:
Input:
gcd(3, 4)
Output:
1
Explanation:
The greatest common divisor of 3 and 4 is 1.
*/

function gcd(a, b) {
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}

let num1 = parseInt(prompt("Enter a Number 1: "));
let num2 = parseInt(prompt("Enter a Number 2: "));
console.log(`Answer = ${gcd(num1, num2)}`);

//--------------------------------------------------------------------------------------------------------------------//

/*
Integers in range
Write a JavaScript program to get the integers in range (x, y) using recursion.
Example 1:
Input:
range(1, 5)
Output:
[1, 2, 3, 4, 5]
Explanation:
All the number between 1 and 5.
 */

function range(x, y) {
    if(y - x === 1) {
        return [x, y];
    }
    if (y - x === 2) {
        return [x + 1];
    } else {
        let list = range(x, y - 1);
        list.push(y - 1);
        return list;
    }
}

let num3 = parseInt(prompt("Enter a Number 1: "));
let num4 = parseInt(prompt("Enter a Number 2: "));
console.log(`Answer = [ ${range(num3, num4)} ]`);

//--------------------------------------------------------------------------------------------------------------------//

/*
Sum of Array
Write a JavaScript program to compute the sum of a given array of integers using recursion.
Example 1:
Input:
const arr = [10, 20, 30, 40]
Output:
100
Explanation:
Sum of all the elements of the array is 100.
 */

function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumOfArray(arr.slice(1));
    }
}
let arr = [];
let n = parseInt(prompt("Enter the number of elements: "));
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt("Enter the element : "));
}
console.log(`Answer = ${sumOfArray(arr)}`);

//--------------------------------------------------------------------------------------------------------------------//

/*
Balancing Parenthesis
Write a javascript program to check if the parenthesis are balanced in a given string using a stack.
Example 1:
Input:
let expr = "([{}])";
Output:
Balanced
Explanation:
The parenthesis are balance in this string as each opening bracket has a closing bracket.
 */

function isBalanced(expr) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '(' || expr[i] === '[' || expr[i] === '{') {
            stack.push(expr[i]);
        } else {
            let last = stack.pop();
            if (expr[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

let expr = prompt("Enter a String: ");
if (isBalanced(expr)) {
    console.log("Balanced");
} else {
    console.log("Not Balanced");
}

//--------------------------------------------------------------------------------------------------------------------//

