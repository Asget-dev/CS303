let users = [
    {id:1,name:"Jhon"},
    {id:2, name:"Peter"},
    {id:3, name:"Mary"},
    {id:4, name:"Peter"},
];



// let findR = function(item){
//     return item.name.includes("r");

// }
// let resutl2 = users.filter(findR);
// console.log(resutl2);

let resutl2 = users.filter(item=>item.name.includes('r'));
console.log(resutl2);