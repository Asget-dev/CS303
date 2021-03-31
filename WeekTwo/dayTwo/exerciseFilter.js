let students = [
    { name: 'Quincy', grade: 96, courses:['cs301', 'cs303']},
    { name: 'Jason', grade: 84, courses:['cs201', 'cs203']},
    { name: 'Alexis', grade: 100, courses:['cs105', 'cs211'] },
    { name: 'Sam', grade: 65, courses:['cs445', 'cs303'] },
    { name: 'Katie', grade: 90, courses:['cs303', 'cs477'] }
  ];



// let findR = function(item){
//     return item.name.includes("r");

// }
// let resutl2 = users.filter(findR);
// console.log(resutl2);

let resutl2 = students.filter(item=>item.courses.includes('cs303'));
                        
let total = students.reduce(function(acc,item){
    return acc + item.grade;
},0);
console.log(total);