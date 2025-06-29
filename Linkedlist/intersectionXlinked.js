/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
// assign value of linked list in set to compare further 

let curr1=headA;
let curr2=headB;
let myset=new Set();
while (curr1)
{
myset.add(curr1);
curr1=curr1.next;
}


while (curr2)
{
if(myset.has(curr2))
return curr2

curr2=curr2.next
}
return null
};