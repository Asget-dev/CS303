let users = [
    {id:1,name:"Jhon"},
    {id:2, name:"Peter"},
    {id:3, name:"Mary"},
    {id:4, name:"Peter"},
];

let outPutid = function(item){
    return item.name;
} 
let result = users.map(outPutid);
console.log(result);

//using arrow function
let result2 = users.map((item)=>item.name);
console.log(result2);

let findLength = users.map(item=>item.name.length);
console.log(findLength);


// ------------------------------------------------------------
let print = users.map(function(item,idx){
    return {index: idx, name: item.name, length: item.name.length};
});
console.log(print);


