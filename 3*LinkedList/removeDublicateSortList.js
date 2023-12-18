function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
}

const deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    while (curr !== null) {
        while (curr.next !== null && curr.val === curr.next.val) {
            curr = curr.next;
        }

        if (prev.next === curr) {
            prev = prev.next;
        } else {
            prev.next = curr.next;
        }
        curr = curr.next;
    }

    return dummy.next;
};


// Example 1
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(3);
list1.next.next.next.next = new ListNode(4);
list1.next.next.next.next.next = new ListNode(4);
list1.next.next.next.next.next.next = new ListNode(5);

const deleted1 = deleteDuplicates(list1);
console.log(deleted1); // Output: [1, 2, 5]

// Example 2
const list2 = new ListNode(1);
list2.next = new ListNode(1);
list2.next.next = new ListNode(1);
list2.next.next.next = new ListNode(2);
list2.next.next.next.next = new ListNode(3);

const deleted2 = deleteDuplicates(list2);
console.log(deleted2); // Output: [2, 3]
