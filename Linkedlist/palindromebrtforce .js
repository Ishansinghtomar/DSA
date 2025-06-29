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
let a=[];
let i=0;
let curr=head;
 while (curr)
 {a[i]=curr.val
    curr=curr.next;
    i++
; }
for (i=0;i<a.length/2;i++)
{
if (a[i] !=a[a.length-1-i])
return false
};
return true
}