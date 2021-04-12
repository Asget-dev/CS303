let obj={
    0:"Hello",
    1:"world",
    length: 4
};

let person = {
    0:"jhon",
    1:"smith",
    length: 2
};

//only for obj
// obj.join = Array.prototype.join;
// let res = obj.join(",");
// console.log(res)

//for all of them
Object.prototype.join = Array.prototype.join;
let res = person.join(",");
console.log(res);

