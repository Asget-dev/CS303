let animal = {
    eats: true
 };
function Dog(name) {
  this.name = name;
  
}
 Dog.prototype = animal;//__proto__= anmimal
let snoopy = new Dog("Snoopy");
//snoopy.__proto__= animal;
console.log(snoopy.eats); // true

// let animal = {
//   eat() {
//     this.full = true;
//   },
// };
// let rabbit = Object.create(animal);
// let rabbit = {
//   __proto__: animal,
// };

//console.log(rabbit.eat());

// ----
// let animal = {
//     walk : function(){
//         if(!this.isSleeping){
//             alert('I walk');
//         }
//     },
//     sleep: function(){
//         this.isSleeping = true;
//     }
// };
// let rabbit = Object.create(animal);
// rabbit.name = "White Rabbit";

// //modifies rabbit.isSleeping
// rabbit.sleep();//this is refer to rabit
// console.log(rabbit.isSleeping);//true
// console.log(animal.isSleeping)//undefined(no such property)
