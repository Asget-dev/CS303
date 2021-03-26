let val = [-1, 1, -4, "a", -5, -6, -10];

// let biggert = val.reduce((acc, val)=>{
//     if(val > 0){
//     acc += val;
//     }return acc;
// },0);
// console.log(biggert)

// let val = [-1,4,5,-2,-3,10];
// 	function findSum(acc, val){
// 		if(val > 0){
// 		acc += val;
// 		}return acc;
// 	}

// let biggert = val.reduce(findSum);
// // console.log(biggert)

// function makePositive(val) {
//     //val.slice();
//    // val.join(".");
//     console.log(val);
// 	let x =[];
// 	for(let i=0; i<val.length;i++){
// 		if(val[i] <

//             0){
// 			x.push(val[i]*-1);
// 		}
// 	}return  x.join(".");
// }



const even = val.filter(number => number % 2 === 0);
console.log(even);
