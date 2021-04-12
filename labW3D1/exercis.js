// let head = {
//     glasses:1
// };
// let table = {
//     pen : 3
// };
// let bed={
//     sheet:1
// };
// let packetes = {
//     money: 2000
// };

let head = {
    glasses:1
};
let table = object.create(head);
table.pen = 3;

let bed = Object.create(table);
bed.sheet=1;
bed.pillow=2;

let pocketes = Object.create(bed);
pocketes.money = 2000;

console.log(pocketes.pen);
console.log(table.glasses);