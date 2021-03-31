let users = [
    {id:1,name:"Jhon"},
    {id:2, name:"Peter"},
    {id:3, name:"Mary"},
    {id:4, name:"Peter"},
];



//OLD WAY
// function find(arr,name){
//     // return true, if the name found in the arr else false
//     for(let user of arr){
//         if(user.name === name){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(find(users, 'Peter'));
// arr.find(function(item, index, array)
//item represent each element ----{id:1, name:"Jhon"}


// function findName(item, index, array){
//     return item.name == 'Peter';
// }
// console.log(users.find(findName));

// const findName = function(item, index, array){
//         return item.name == 'Peter';
// }
// console.log(users.find(findName));


// const findName = function(item){
//     return item.name == 'Peter';
// }

// let result = users.find(findName);
// console.log(result);


let result = users.find(item=>item.name == 'Peter');
console.log(result);

