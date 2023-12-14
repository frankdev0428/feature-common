function hasCycle(head) {
    if (!head || !head.next) {
        return false; // If the list has 0 or 1 node, there's no cycle
    }

    let tortoise = head;
    let hare = head.next;

    while (tortoise !== hare) {
        if (!hare || !hare.next) {
            return false; // If hare reaches the end, there's no cycle
        }
        tortoise = tortoise.next;
        hare = hare.next.next;
    }

    return true; // If the pointers meet, there's a cycle
}

// Example 1
const head1 = { val: 3, next: { val: 2, next: { val: 0, next: { val: -4, next: null } } } };
head1.next.next.next.next = head1.next; // Creating a cycle

console.log(hasCycle(head1)); // Output: true

// Example 2
const head2 = { val: 1, next: { val: 2, next: null } };
head2.next.next = head2; // Creating a cycle

console.log(hasCycle(head2)); // Output: true

// Example 3
const head3 = { val: 1, next: null };

console.log(hasCycle(head3)); // Output: false

