let number = [1,2,3,4];
console.log(number);

//set id dosent have 
// not allowed duplicate
// Set is constarctor function==>function==>object==>so set is Objct too
let numSet = new Set();
numSet.add(2);
numSet.add(3);
numSet.add(2);
numSet.add(5);
console.log(numSet);

numSet.delete(2);
console.log(numSet.has(6));
console.log(numSet.size);

//numSet.clear();
console.log(numSet);

let personSet = new Set();
personSet.add({id:1, name: "John"});
personSet.add({id:2, name: "Mary"});

console.log(personSet);

personSet.forEach(value=>{
    if(value.names.includes('n'){
        console.log(value);
    }
})

for(let item of personSet){
    if(item.name.includes('a')){
        console.log(item);
    }
}