/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
let myset=new Set();
let curr=head;
while (curr&&curr.next)
{   myset.add(curr.val);
    if(myset.has(curr.next.val))
    curr.next=curr.next.next
    else
    {
   curr=curr.next;
    }
}
return head;
};