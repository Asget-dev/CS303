// function sum(num) {
//   if (num === 0) {
//     return 0;
//   }else{
//       return n + sum(num - 1);
//   }
// }
// console.log(sum(100));



//ADD
let linkedList = {};
linkedList.next = { value: 1 };
linkedList.next.next = { value: 2 };
linkedList.next.next.next = { value: 3 };

console.log(`linkedList {${print(linkedList.next)}}`);

//PRINT
function print(linkedList) {
  if (linkedList.next == null) {
    return linkedList.value;
  } else {
    return linkedList.value + ", " + print(linkedList.next);
  }
}

//REMOVE
let node = linkedList.next.next;
linkedList.next = node;
node = null;

console.log(`linkedList {${print(linkedList.next)}}`);


