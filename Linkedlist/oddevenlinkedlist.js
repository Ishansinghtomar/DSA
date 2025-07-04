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
var oddEvenList = function(head) {

let even=evenstart =head.next;

let odd=head;
while(odd.next &&even.next)
{
odd.next=odd.next.next;
even.next=even.next.next
odd=odd.next;
even=even.next;
}
odd.next=evenstart
return head;
};