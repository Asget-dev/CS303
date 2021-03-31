let list = {value: 1};
list.next = {value: 2};
list.next.next = {value:3}
list.next.next.next = {value:4};

console.log(list);


let node4={
    valude:5,
    next: null,
}
let node3={
    value: 4,
    next: node4,
}
let node2={
    value:2,
    next:node3,
}
let node1={
    value:1,
    next: node2,
}
let abc= node1.next.next;
console.log(abc.value);
//objce by reference
console.log(abc===node3);

let linkedList = {
    value:1,
    next: node2,
};
let res1 = linkedList.next;// res1 ===node2
let res2 = res1.next;
//to get the value
console.log(linkedList.next.value);
