const prompt = require('prompt-sync')();


/*
Type conversion
Implicit type conversion: Declare string and add integer. Notice how javascript implicitly converts integer to string.
Explicit type conversion: Declare string and add integer by explicitly converting string to integer.
Example 1:
Input:
let number = "777"; let integer = 8;
Output:
"7778" 785
Explanation:
Adding firstly the number which is a string to a integer then in second one firstly converted string into integer and the added the number and integer, hence, the output.
 */

let str = prompt("Enter a Number 1: ").toString();
let num = parseInt(prompt("Enter a Number 2: "));

console.log(`"${str.concat(num)}" ${parseInt(str) + parseInt(num)}`);


/*
Declaring variable
Using javascript variables, declare a variable named newVariable and assign it the following string, "AlmaBetter".
Example 1:
Input:
newVariable = AlmaBetter
Output:
AlmaBetter
Explanation:
Assigned the AlmaBetter string to the newVariable.
 */

let newVariable = "AlmaBetter";
console.log(newVariable);

/*
Printing Input
Print the input specified: input = "This is the first and only line of input string".
Example 1:
Input:
var input = "This is the first and only line of input string";
Output:
This is the first and only line of input string
Explanation:
Printed the input specified, hence, the output.
 */

let input = "This is the first and only line of input string";
console.log(input);


/*
Javascript Operators
Javascript Operators Assign two numeric variables a and b Initialise values as 5 and 10 respectively and console log in same order the following:
Create a variable add and assign it the sum of a and b.
Create a variable sub and assign it result of b subtracted from a.
Create a variable mul and assign it the product of a and b.
Create a variable div and assign it the result of of a divided by b.
Create a variable inc and assign it the preincremented value of a.
Create a variable dec and assign it the predecremented value of b.
Example 1:
Input:
var a = 5 var b = 10
Output:
15 5 50 0.5 6 9
Explanation:
We have operate the given operations in ascending order and printed the result at every instance, Hence, the output.
 */

console.log("Javascript Operators");
let a = parseInt(prompt("Enter a first value: "));
let b = parseInt(prompt("Enter a second value: "));

function operations(a, b) {
    let add = a + b;
    let sub = b - a;
    let mul = a * b;
    let div = a / b;
    let inc = ++a;
    let dec = --b;
    return `\n ADD = ${add} \n SUB = ${sub} \n MUL =  ${mul} \n DIV = ${div} \n INCREASE = ${inc} \n DESCRESE + ${dec}`;
}

console.log(`Answer = ${operations(a, b)}`);
