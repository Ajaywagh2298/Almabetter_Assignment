const prompt = require('prompt-sync')();
//ES Modules and Libraries

/*
TODO: Object Literal
Construct an object and write a javascript program to print out ‘Hello, My name is John Doe’ using literals.
Example 1:
Input:
const object = { starter: 'Hello, My name is', firstName: 'John', lastName: 'Doe', }
Output:
Hello, My name is John Doe
Explanation:
The output is printed out using object literal.
 */
const object = { starter: 'Hello, My name is', firstName: 'John', lastName: 'Doe', }
console.log(`${object.starter} ${object.firstName} ${object.lastName}`);

/*
Lodash Module
Write a Javascript function that imports the lodash module (using commonjs syntax) and iterates through the given array and prints each letter.
Example 1:
Input:
const letters = ['a', 'b', 'c']
Output:
a b c
Explanation:
Iterating over the letters array using forEach method and printing every letter.
 */
const _ = require('lodash');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
_.forEach(letters, function(letter) {
    console.log(letter);
}  );




