





/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
let start,curr;

if (!l1)return l2;
if (!l2) return l1;

start= new ListNode();
curr=start;
while (l1 && l2)
{
if (l1.val<l2.val)
{
    start.next=l1;
    l1=l1.next;
}
else
{
    start.next = l2;
    l2=l2.next;
}
start=start.next;
}
if (!l1)start.next=l2;
if(!l2)start.next=l1;
return curr.next;
}































//without using dummy node
//======================================================================
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function(l1, l2) {
    
// let start,curr;

// if (!l1)return l2;
// if (!l2) return l1;

// if(l1.val>l2.val)
// {
// start=l2;
// l2=l2.next;
// }
// else
// {start =l1;
//     l1=l1.next
// }
// curr=start;

// while (l1 && l2)
// {
// if (l1.val<l2.val)
// {
//     start.next=l1;
//     l1=l1.next;
// }
// else
// {
//     start.next = l2;
//     l2=l2.next;
// }
// start=start.next;
// }
// if (!l1)start.next=l2;
// if(!l2)start.next=l1;
// return curr;
// }