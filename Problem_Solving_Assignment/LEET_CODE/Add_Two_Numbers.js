/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Example 1:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 * Example 3:
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 *
 * Constraints:
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 * */

// if arrays is input
let addTwoNumbers = function(l1, l2) {
    let arr1 = [], arr2 = [];
    arr1 = l1.join('');
    arr2 = l2.join('');
    let sum = parseInt(arr1) + parseInt(arr2);
    let result = sum.toString().split('');
    return result.reverse();
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));

// linked list is input

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function addTwoNumbers2(l1, l2) {
    let carry = 0;
    let result = new ListNode(0);
    let current = result;

    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return result.next;
}

console.log(addTwoNumbers2([2,4,3], [5,6,4]));
