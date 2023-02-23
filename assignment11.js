const prompt = require('prompt-sync')();
//JavaScript Miscellaneous Concepts

/*
TODO: String Uppercase
Write a JavaScript program to test whether the first character of a string is uppercase or not using regular expressions.
Example 1:
Input:
const str = 'def'
Output:
false
Explanation:
The output prints out false as the first character of the given string is not uppercase.
 */

console.log("String Uppercase");
const str = prompt("Enter string : ");
const regex = /^[A-Z]/;
console.log(regex.test(str));


/*
TODO:Alphanumeric String
Write a JavaScript function to check whether a given value is alphanumeric or not.
Example 1:
Input:
is_alphaNumeric("37828sad");
Output:
true
Explanation:
This string contains all the alphabets from a-z, A-Z, and the number from 0-9. Therefore, it is an alphanumeric string.
 */

console.log("Alphanumeric String");
const is_alphaNumeric = (str) => {
    return /^[a-zA-Z0-9]+$/.test(str);
}
let str1 = prompt("Enter string : ");
console.log(is_alphaNumeric(str1));


/*
TODO: Number of Vowels
Write a JavaScript function to count the number of vowels in a given string.
Example 1:
Input:
vowel_count('The quick brown fox jumps over the lazy dog');
Output:
11
Explanation:
Write a function vowel_count(), passing the string to it and counting the number of vowels and printing it out.
 */


console.log("Number of Vowels");
const vowel_count = (str) => {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}
let str2 = prompt("Enter string : ");
console.log(vowel_count(str2));


/*
TODO: HexColor String
Write a JavaScript function to check whether a given value is hexcolor value or not.
Example 1:
Input:
is_hexcolor("#444");
Output:
true
Explanation:
A hex color contains the alphabets from (A-F) and number from (0-9) and is of length 3 or 6. Since, the string satisfies these parameters, hence we get true as output.
 */

console.log("HexColor String");
const is_hexcolor = (str) => {
    return /^#([0-9A-F]{3}){1,2}$/i.test(str);
}
let str3 = prompt("Enter string : ");
console.log(is_hexcolor(str3));
