let linkedList = {value: 1};
linkedList.next = {value: 2};
linkedList.next.next = {value:4}
linkedList.next.next.next = {value:5};
console.log(linkedList);

let secondList = list.next.next;
list.next.next = null;
console.log(secondList);
console.log(list);


