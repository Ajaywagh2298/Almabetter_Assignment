const prompt = require('prompt-sync')();
// Arrays in JAVA SCRIPT

/**
 * Using Map() method
 * Given an integer n . Return the factorial of integer by using map and reduce method.
 * Example 1:
 * Input:
 * 6
 * Output:
 * 720
 * */

function factorial(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr.reduce((a, b) => a * b);
}
console.log("\n Add the Number for Factorial......");
const num = prompt('Number :');
console.log(`Answer is : ${factorial(num)}`);

/*
*TODO: Joining elements in Array
Given the size of array n and an array .Write a simple JavaScript program to join all elements of the following array into a string using '+' sign in between the elements..
Example 1:
Input:
4
["Red", "Green", "White", "Black"];
Output:
Red+Green+White+Black
Explanation:
Performed join operation on the elements of array with '+' sign in between.
* */

function joinElements(arr) {
    return arr.join('+');
}
console.log("\n Add the Array for Joining Elements......");
const len = prompt('Array Size:');
let arr = [];
for (let i = 0; i < len; i++) {
    arr.push(prompt(`Array[${i}] :`));
}
console.log(`Answer is : ${joinElements(arr)}`);

/*
TODO : Filtering Array
Given the size of array n and an array of strings. Return the string having length greater than or equal to 6 by using filter method.
Example 1:
Input:
6
["spray", "limit", "elite", "exuberant", "destruction", "present"];
Output:
["exuberant", destruction", "present"]
Explanation:
The output shows that the array has been filtered with required conditions.
 */

function filterArray(arr) {
    return arr.filter((item) => item.length >= 6);
}
console.log("\n Add the Array for Filtering Array......");
/*const lenOne = prompt('Array Size:');*/
let arrOne = ["spray", "limit", "elite", "exuberant", "destruction", "present"];;
/*for (let i = 0; i < lenOne; i++) {
    arr.push(prompt(`Array[${i}] :`));
}*/
console.log(`Answer is : ${filterArray(arrOne)}`);

/*
* TODO : Uppercase Array
Given the size of array n and an array of strings.Write Javascript program to return an array whose elements is in uppercase of words present in the original array.
Example 1:
Input:
["avengers", "captain america", "ironman", "black panther"];
Output:
["AVENGERS","CAPTAIN AMERICA","IRONMAN","BLACK PANTHER"]
Explanation:
Converted every element of the array to uppercase and stored in the array, hence the output.
* */

function uppercaseArray(arr) {
    return arr.map((item) => item.toUpperCase());
}
console.log("\n Add the Array for Uppercase Array......");
/*const lenTwo = prompt('Array Size:');*/
let arrTwo = ["avengers", "captain america", "ironman", "black panther"];
/*for (let i = 0; i < lenTwo; i++) {
    arr.push(prompt(`Array[${i}] :`));
 */
console.log(`Answer is : ${uppercaseArray(arrTwo)}`);

