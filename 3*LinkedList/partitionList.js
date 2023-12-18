function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
}

const partition = function(head, x) {
    // Create two dummy nodes for two partitions
    let before = new ListNode(0);
    let after = new ListNode(0);

    let beforePtr = before;
    let afterPtr = after;

    let current = head;

    // Traverse the original list and divide the nodes into two partitions
    while (current) {
        if (current.val < x) {
            beforePtr.next = current;
            beforePtr = beforePtr.next;
        } else {
            afterPtr.next = current;
            afterPtr = afterPtr.next;
        }
        current = current.next;
    }

    // Connect the two partitions and set the end of the after partition as null
    beforePtr.next = after.next;
    afterPtr.next = null;

    // Return the head of the combined list
    return before.next;
};

// Example 1
const list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(2);
list1.next.next.next.next = new ListNode(5);
list1.next.next.next.next.next = new ListNode(2);

const partitionedList1 = partition(list1, 3);
console.log(partitionedList1); // Output: [1, 2, 2, 4, 3, 5]

// Example 2
const list2 = new ListNode(2);
list2.next = new ListNode(1);

const partitionedList2 = partition(list2, 2);
console.log(partitionedList2); // Output: [1, 2]
