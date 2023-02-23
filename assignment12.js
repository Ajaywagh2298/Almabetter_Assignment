const prompt = require('prompt-sync')();
//Stacks and Queues

/*
TODO: Sort Stack using another Stack
Given a stack of size n , your task is to sort a stack using another stack by using the function sortstack()
Example 1:
Input:
const arrToSort = [98, 88, 3, 69, 55]
Output:
[3, 55, 69, 88, 98]
Explanation:
The output array has been sorted using another stack.
 */

console.log("Sort Stack using another Stack  ")
function sortstack(arrToSort) {
    let temp = [];
    while (arrToSort.length != 0) {
        let t = arrToSort.pop();
       // console.log("t : " + t)
        while (temp.length != 0 && temp[temp.length - 1] > t) {
            arrToSort.push(temp.pop());
           // console.log("arrToSort : " + arrToSort)
        }
        temp.push(t);
    }
    return temp;
}

let size = prompt("Enter size of array : ");

let arr = [];
for (let i = 0; i < size; i++) {
    arr[i] = prompt("Enter element : ");
}
console.log(`Input Array`);
console.log(arr);
console.log(`Output Array`);
console.log(sortstack(arr));
