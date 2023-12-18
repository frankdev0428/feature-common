
function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
}

const rotateRight = function(head, k) {
    if (!head || k === 0) {
        return head;
    }

    let length = 1;
    let current = head;

    // Calculate the length of the linked list
    while (current.next) {
        current = current.next;
        length++;
    }

    // Connect the last node to the head to make it circular
    current.next = head;

    // Calculate the actual rotation count
    let rotation = k % length;

    // Find the new tail node and break the list at the new head
    for (let i = 0; i < length - rotation; i++) {
        current = current.next;
    }

    let newHead = current.next;
    current.next = null;

    return newHead;
};

// Example 1
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

const rotated1 = rotateRight(list1, 2);
console.log(rotated1); // Output: [4, 5, 1, 2, 3]

// Example 2
const list2 = new ListNode(0);
list2.next = new ListNode(1);
list2.next.next = new ListNode(2);

const rotated2 = rotateRight(list2, 4);
console.log(rotated2); // Output: [2, 0, 1]

