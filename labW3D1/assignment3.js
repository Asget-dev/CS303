let student = {
    firstName : "Default",
    lastName : "Default",
    grades : [],
    inputNewGrade: function (newGrade) {
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
let average = student.computeAverageGrade();
 
console.log(students);