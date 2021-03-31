let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Smith" },
  { id: 4, name: "William" },
  { id: 5, name: "Ivy" },
  { id: 6, name: "Christina" },
  { id: 7, name: "Martin" },
  { id: 8, name: "Stephine" },
  { id: 9, name: "Charlie" },
  { id: 10, name: "Zard" },
];

// let greateThan = users.filter((item)=>item.name.length > 4)
//                       .reduce(function(acc,item,index,array){
//                           return acc + 1;
//                       },0);
                        

//arrow function

let greateThan = users.filter((item)=>item.name.length > 4)
                      .reduce(acc=>acc + 1,0);

console.log(greateThan);

let lengthNamea = users.filter(item=>item.name.includes('a'))
                       .map(item=>item.name.length);
console.log(lengthNamea);