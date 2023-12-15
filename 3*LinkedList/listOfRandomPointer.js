

function Node(val, random, next) {
    this.val = val;
    this.next = next || null;
    this.random = random || null;
}

function copyRandomList(head) {
    if (!head) return null;

    const map = new Map();

    // First pass: create copies of each node and store them in the map
    let node = head;
    while (node) {
        map.set(node, new Node(node.val));
        node = node.next;
    }

    // Second pass: assign next and random pointers for each copied node
    node = head;
    while (node) {
        map.get(node).next = map.get(node.next) || null;
        map.get(node).random = map.get(node.random) || null;
        node = node.next;
    }

    return map.get(head);
}

// Example 1
const node1 = new Node(7);
const node2 = new Node(13);
const node3 = new Node(11);
const node4 = new Node(10);
const node5 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node1.random = null;
node2.random = node1;
node3.random = node5;
node4.random = node3;
node5.random = node1;

const copiedList1 = copyRandomList(node1);
console.log(copiedList1); // Output: The copied linked list nodes with their respective values and random pointers

