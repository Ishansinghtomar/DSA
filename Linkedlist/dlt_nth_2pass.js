/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

let sentinal=new ListNode();
sentinal.next=head;

//calculate the length of linked list 

let count =0;
while (head)
{
    head=head.next
    count++;
}

//

let prev=sentinal;
for(i=0;i<count-n;i++)
{
prev=prev.next;
}
prev.next=prev.next.next;

return sentinal.next;
};