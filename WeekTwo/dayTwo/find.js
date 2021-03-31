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
let length = users.filter((item) => item.name.length > 4);

console.log(length.length);

let names = users.filter(
  (item) => item.name.length > 5 && item.name.includes("a")
);
//.map(item =>  item.name.includes('a'));
console.log(names);

function Employee(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  getFullName = function () {
    return this.firstName + this.lastName;
  };
  getAge = function () {
    let currentYear = new Date().getFullYear();
    let birthday = new Date(this.birthday).getFullYear();
    return currentYear - birthday;
  };
}
