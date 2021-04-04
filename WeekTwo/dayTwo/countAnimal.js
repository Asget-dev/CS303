// let arr = ["cat","cat","dog","cat","pet"];
// function countAnimal(arr){
//     let x=[];
//     let count = 0;
//  for(let i=0; i<arr.length;i++){
//      if(arr[i]===arr[i+1]){
//          count++;
//      }x.push(arr[i],count);
//  }
//  return x;
// } 
// console.log(countAnimal(arr));

let names = ['dog','chicken','cat','dog','chicken','chicken','rabbit'];
// function aggregare(arr){
//     return arr.reduce(function (obj,pet){
//         if(!obj[pet]){
//             obj[pet] = 1;
//         }else{
//             obj[pet]++;
//         }
//         return obj;
//     },{});
// }let petCounts = aggregare(pets);


function aggregate(names){
return names.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++
    }
    else {
      allNames[name] = 1
    }
    return allNames
  }, {})
}
let pettcccou = aggregate(names);

console.log(pettcccou);