// ______________________21. Merge Two Sorted Lists________________

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

// create first linked list: 1 -> 3 -> 10
let t3 = new Node(10, null);
let t2 = new Node(3, t3);
let t1 = new Node(1, t2);

let L1 = t1;

// create second linked list: 5 -> 6 -> 9
let t6 = new Node(9, null);
let t5 = new Node(6, t6);
let t4 = new Node(5, t5);

let L2 = t4;

function mergeSortedLists(L1, L2) {
  // create new linked list Header pointer
  let head = new Node(null, null);
  let tail = head;
   // while both linked lists are not empty
  while (L1 && L2) {
    if (L1.val <= L2.val) {
      tail.next = L1;
      L1 = L1.next;
    } else {
      tail.next = L2;
      L2 = L2.next;
    }
    tail = tail.next;
  }
  // once we reach end of a linked list, append the other
  // list because we know it is already sorted
  if (L1) {
    tail.next = L1;
  }
  if (L2) {
    tail.next = L2;
  }
    // return the sorted linked list
  return head.next;
}

console.log(mergeSortedLists(L1, L2));