function Student(firstName, lastName,grades=[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;

}

let studentOneGrades = [89, 95, 92, 90];
let studentTwoGrades = [86, 81, 90, 84];
let student1 = new Student("Abebe",'Kebed',studentOneGrades);
let student2 = new Student("Samson",'Belete',studentTwoGrades);

Student.prototype.inputNewGrade= function(newGrade){
    this.grades.push(newGrade);
    return this.grades;
 };
 
 Student.prototype.computeAverageGrade= function(){
     let total = this.grades.reduce((acc,curr)=>acc+curr,0)/this.grades.length;
     return total;
 };


let ccc =  student1.inputNewGrade(89);
let ccc2 =  student2.inputNewGrade(95); 
console.log(student1);
console.log(student2);
console.log(student1.computeAverageGrade());
 let allStudents = [student1,student2];
 console.log(allStudents);
 let allStudentAvg = allStudents.map((student) => {
     let grade = student.grades
    return grade.reduce((acc, gr) => acc + gr,0)/grade.length;
});
console.log(allStudentAvg); 




