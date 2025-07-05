/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next )
    return head;
    //find length;
    let curr=slow=fast=head;
    let len=0;;
    while(curr)
    {
        curr=curr.next;
        len++;

    }

// create gap based on k
for (let i=0;i<(k%len);i++)
{
    fast=fast.next;
}
while (fast.next)
{
slow=slow.next;
fast=fast.next;
}
fast.next=head;
head=slow.next;
slow.next=null;

return head;
};