// // // console.log("**************  Question 1 **********************");
let number = [1,50,40,3,10];
let result = number.filter(item => item>20)
                   .reduce((sum, item)=>sum+item,0);
console.log(result);

// // // console.log("**************  Question 2 **********************");
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
  
  let names = users.filter(
    (item) => item.name.length > 5 && item.name.includes("a")
  );
console.log(names);

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



  let users2 = [];
  users2.push(new Employee("Mard ","Melkam","10-10-1987"),
            new Employee("Alex ","Seyfu","10-10-2005"),
            new Employee("Helon ","Milla","10-10-2006"),
            new Employee("Teklay ","Samson","10-10-1979"));

let greaterAge=users2.filter(item=>(item.getAge()>20));
console.log(greaterAge);

let lessAge=users2.filter(item=>item.getAge()<21)
                  .map(item=>item.getFullName());
console.log(lessAge);
