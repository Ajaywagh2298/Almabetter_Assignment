const prompt = require('prompt-sync')();
// JavaScript Strings and Operators

/**
 * TODO: Reverse Strings
 * Given an input string and the task is to reverse the input string.
 * Example 1:
 * Input:
 * Hello
 * Output:
 * olleH
 * */

function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log("\n Add the String for Reverse String......");
const str = prompt('String :');
console.log(`Answer is : ${reverseString(str)}`);

/**
 * TODO: String Assignment
 * Given a string containing character "a" having each letter in lowercase. Return string by replacing all character "a" with "m" and make all characters in uppercase.
 * Example 1:
 * Input:
 * Almabetter
 * Output:
 * ALMMBETTER
 * */

function stringAssignment(str) {
    /*let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a") {
            newStr += "m";
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;*/
    return str.replace('a','m').toUpperCase();
}
console.log("\n Add the String for String Assignment......");
const str1 = prompt('String :');
console.log(`Answer is : ${stringAssignment(str1)}`);


/**
 * TODO: First Letter UpperCase
 * Given a string having all letters in lowercase . Return string by making its first letter in uppercase.
 * Example 1:
 * Input:
 * this is a almabetter
 * Output:
 * This is a almabetter
 * */

function firstLetterUpperCase(str) {
    let newStr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        newStr += str[i];
    }
    return newStr;
}
console.log("\n Add the String for First Letter UpperCase......");
const str2 = prompt('String :');
console.log(`Answer is : ${firstLetterUpperCase(str2)}`);

