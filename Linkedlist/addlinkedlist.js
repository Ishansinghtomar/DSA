/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
let sum=carry=0;
let dummy=new ListNode();
let curr=dummy;
while (l1 || l2 ||carry)
{

sum =(l1?.val||0) +(l2?.val||0)+carry;
carry =Math.floor(sum/10);
curr.next=new ListNode(sum%10);
curr=curr.next;

l1=l1?.next;
l2=l2?.next;

}
return dummy.next
};








//DUmmmmmmmmmmmmmmmmyyyyyyyyy solution
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
// let sum=carry=0;
// let val1=l1.val;
// let val2=l2.val;
// let final=new ListNode();
// let finalpointer=final;
// while(l1|| l2 || carry)
// {
// sum=val1+val2+carry;
//     carry=Math.floor(sum/10);
//     sum=sum%10;
// let dummy=new ListNode(sum);
// final.next=dummy;
// final=final.next;
// if (l1 &&l1.next)
// l1=l1.next;
// else l1=null;
// if (l2 &&l2.next)
// l2=l2.next;
// else
// l2=null;
// val1=l1&&l1.val?l1.val:0;
// val2=l2&&l2.val?l2.val:0;
// }

// return finalpointer.next;
// };