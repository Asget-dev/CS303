
let student = {
    firstName : "Default",
    lastName : "Default",
    grades : [],
    inputNewGrade: function(newGrade){
       this.grades.push(newGrade);
    },
    computeAverageGrade: function(){
        let total = this.grades.reduce((acc,curr)=>acc+curr,0)/this.grades.length;
        return total;
    }
}

let Abebe = Object.create(student);
Abebe.firstName = "Abebe";
Abebe.lastName = "Bekele";
Abebe.grades = [];
Abebe.inputNewGrade(56);
Abebe.inputNewGrade(66);
Abebe.inputNewGrade(64);

let Chala = Object.create(student);
Chala.firstName = "Chala";
Chala.lastName = "Zenebe";
Chala.grades = [];
Chala.inputNewGrade(90);
Chala.inputNewGrade(89);
Chala.inputNewGrade(92);

 
let students = [Abebe,Chala];
console.log(students);

let abebeAverage = Abebe.computeAverageGrade();
console.log(abebeAverage);
let chalaAverage = Chala.computeAverageGrade();
console.log(chalaAverage);
let allAverage = [abebeAverage,chalaAverage];
let allStudentAvg = allAverage.map((student) => {
    let grade = student.grades
   return grade.reduce((acc, gr) => acc + gr,0)/grade.length;
});
console.log(allStudentAvg); 


/**Question number 3 */
// Array.prototype.sort = function(){
//     for (let i = 0; i < this.length; i++) {
//         for (let j = 0; j < this.length; j++) {
//           if (this[j] > this[j+1]) {
//             let temp = this[j];
//             this[j] = this[j + 1];
//             this[j + 1] = temp;
//           }
//         }
//       }
//       return this;
// };


// let xx = [1, 2, 3, 4, 55, 3];
// let result = xx.sort();
// console.log(result);