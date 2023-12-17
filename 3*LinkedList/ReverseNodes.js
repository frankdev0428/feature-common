

function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
}

const reverseKGroup = function(head, k) {
    let count = 0;
    let current = head;

    // Move the current pointer to the kth node
    while (current !== null && count < k) {
        current = current.next;
        count++;
    }

    // If there are less than k nodes remaining, return head
    if (count < k) return head;

    // Reverse the next k nodes
    let reversedHead = reverseKGroup(current, k);

    // Reverse the current k nodes
    while (count > 0) {
        let temp = head.next;
        head.next = reversedHead;
        reversedHead = head;
        head = temp;
        count--;
    }

    return reversedHead;
};

// Example 1
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

const k1 = 2;
const reversed1 = reverseKGroup(list1, k1);
console.log(reversed1); // Output: [2, 1, 4, 3, 5]

// Example 2
const list2 = new ListNode(1);
list2.next = new ListNode(2);
list2.next.next = new ListNode(3);
list2.next.next.next = new ListNode(4);
list2.next.next.next.next = new ListNode(5);

const k2 = 3;
const reversed2 = reverseKGroup(list2, k2);
console.log(reversed2); // Output: [3, 2, 1, 4, 5]
