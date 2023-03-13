var reverseList = function(head) {
  // Special case...
  if (head == null || head.next == null) return head;
  // Create a new node to call the function recursively and we get the reverse linked list...
  var res = reverseList(head.next);
  // Set head node as head.next.next...
  head.next.next = head;
  //set head's next to be null...
  head.next = null;
  return res;     // Return the reverse linked list...
};


var reverseList = function(head) {
  let [prev, current] = [null, head]
  while(current) {
      [current.next, prev, current] = [prev, current, current.next]
  }
  return prev
}

var reverseList = function(head) {
  let prev = null
  let curr = head
  let next = null
  
  while(curr!== null){
      // save next
      next = curr.next
      // reverse
      curr.next = prev
      // advance prev and curr
      prev = curr
      curr = next
  }
  return prev;
};

var reverseList = function(head) {
	// base case
    if (head == null || head.next == null){
        return head;
    }
	// go all the way to the end
    let reversedListHead = reverseList(head.next)
	// add reverse myself
    head.next.next = head;
    head.next = null;
	// go up
    return reversedListHead
};


 