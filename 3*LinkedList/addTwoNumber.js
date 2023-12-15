function ListNode(val) {
    this.val = val;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        const x = (p !== null) ? p.val : 0;
        const y = (q !== null) ? q.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// Example 1
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const result1 = addTwoNumbers(l1, l2);
console.log(result1); // Output: ListNode { val: 7, next: ListNode { val: 0, next: ListNode { val: 8, next: null } } }

// Example 2
const l3 = new ListNode(0);
const l4 = new ListNode(0);

const result2 = addTwoNumbers(l3, l4);
console.log(result2); // Output: ListNode { val: 0, next: null }