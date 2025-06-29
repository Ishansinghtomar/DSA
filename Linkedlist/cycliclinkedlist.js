/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
let curr =head;
let myset=new Set();
while (curr)
{

if(myset.has(curr))
return true;
myset.add(curr);
curr=curr.next;
}
return false;
};