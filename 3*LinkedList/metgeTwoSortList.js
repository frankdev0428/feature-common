

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function mergeTwoLists(l1, l2) {
    const dummyHead = new ListNode(0);
    let curr = dummyHead;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    curr.next = l1 !== null ? l1 : l2;

    return dummyHead.next;
}

// Example 1
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const mergedList1 = mergeTwoLists(list1, list2);
console.log(mergedList1); // Output: ListNode { val: 1, next: ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 4, next: null } } } } } }

// Example 2
const list3 = null;
const list4 = null;

const mergedList2 = mergeTwoLists(list3, list4);
console.log(mergedList2); // Output: null
