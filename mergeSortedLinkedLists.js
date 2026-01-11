/* class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(0);
    let op = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            op.next = list1;
            list1 = list1.next;
        } else {
            op.next = list2;
            list2 = list2.next;
        }
        op = op.next;
    }
    op.next = list1 || list2;

    return dummy.next;
}; */

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])); // []
console.log(mergeTwoLists([], [0])); // [0]
