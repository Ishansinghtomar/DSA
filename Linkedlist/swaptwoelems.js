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
var swapPairs = function(head) {
    
// edge cases no swapping requuied
if(!head || !head.next)
return head;
 
 // creating a sentinal or dummy node
 let dummy= new ListNode();
 dummy.next=head;

//create 3 pointers and assign

let p=dummy
let c=head
let n=head.next

// swapping to be done unless we have 2 elemts c and n
while (c && n)
{
// set pointers 
p.next=n
c.next=n.next
n.next=c;

//set next set of values pointers 

p=c;
c=p.next
n=c&& c.next
}
return dummy.next;
};