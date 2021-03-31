// let value = arr.reduce(function(previousValue, item, index, array) {
//     // ...
//     }, [initial]);


let arr = [1,2,3,4,5,40,8];


let reduce =function(arr){
    let sum=0;
    for(let item of arr){
        sum= sum+item;
    }
    return sum;

}
let result = reduce(arr);
console.log(result);


//arrow function
let total = arr.reduce(function(acc,item,index,array){
    return acc + item;
},0);
console.log(total);