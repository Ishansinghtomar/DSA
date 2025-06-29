/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
//middle elements
let slow=fast=head;
while (fast && fast.next)
{
    slow =slow.next;
    fast=fast.next.next;
}

// reverse the second half 

let prev=null;
let curr=slow;
let temp;
while(curr)
{
temp=curr.next;
curr.next=prev;
prev=curr;
curr=temp;
}

//compare 

let firstlist=head;
let secondlist=prev;
while (secondlist)
{
    if (firstlist.val != secondlist.val)
    return false
    firstlist=firstlist.next;
    secondlist=secondlist.next;
}
return true;
};