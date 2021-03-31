// console.log("**************  Question 1 **********************");
// let number = [1,50,40,3,10];
// let result = number.filter(item => item>20)
//                    .reduce((sum, item)=>sum+item,0);
// console.log(result);

// console.log("**************  Question 2 **********************");
// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Pete" },
//     { id: 3, name: "Smith" },
//     { id: 4, name: "William" },
//     { id: 5, name: "Ivy" },
//     { id: 6, name: "Christina" },
//     { id: 7, name: "Martin" },
//     { id: 8, name: "Stephine" },
//     { id: 9, name: "Charlie" },
//     { id: 10, name: "Zard" },
//   ];
//   let length = users.filter((item) => item.name.length > 4);
  
//   console.log(length.length);
  
//   let names = users.filter(
//     (item) => item.name.length > 5 && item.name.includes("a")
//   );
// console.log(names);

  console.log("**************  Question 3 **********************");
  
  
  function Employee(firstName, lastName,birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.getFullName = function () {
      return this.firstName + this.lastName;
    }
    this.getAge = function () {
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(this.birthDate).getFullYear();
        return currentYear - birthYear;
    }
  }


let employeeRecord = new Set();//constrator function//function is alos object //set object
employeeRecord.add({firstName:"F ",lastName:"G",birthDate:'11-10-1987'});
employeeRecord.add({firstName:"B ",lastName:"H",birthDate:'12-10-1987'});
employeeRecord.add({firstName:"C ",lastName:"I",birthDate:'08-10-1987'});
employeeRecord.add({firstName:"D ",lastName:"J",birthDate:'02-10-1987'});
employeeRecord.add({firstName:"E ",lastName:"K",birthDate:'01-10-1987'});
console.log(employeeRecord);

// console.log(person1.getFullName());
// console.log(person1.getAge());


// Use array methods: filter, map, reduce, etc to implement below:
 
// •Question 1: For a given array, sum all the elements which are greater than 20.
// •[1, 50, 40, 3, 10] => Print result: 90
// •Question 2: For a given String array, return a new array which contains all string, length is greater than and equals to 5, and contains letter ‘a’.
// •Question 3:
// •Create a constructor function Employee with properties: firstName, lastName, birthdate: Date type, methods: getFullName(), getAge()
// •Create an array with a few Employee objects with different firstName, lastName, birthdate.
// •Find if there is any employee which age is greater than 20
// •Return a String array which contains the full name of employee and born after 2000