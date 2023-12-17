

function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
}

const reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Move the pointers to the position before the reversal starts
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    let current = prev.next;
    let next = null;

    // Perform the reversal
    for (let i = 0; i < right - left; i++) {
        next = current.next;
        current.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return dummy.next;
};


// Example 1
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

const left1 = 2;
const right1 = 4;

const reversed1 = reverseBetween(list1, left1, right1);
console.log(reversed1); // Output: [1, 4, 3, 2, 5]

// Example 2
const list2 = new ListNode(5);
const left2 = 1;
const right2 = 1;

const reversed2 = reverseBetween(list2, left2, right2);
console.log(reversed2); // Output: [5]
