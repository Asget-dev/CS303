"use strict";
class Pet {
  constructor(animal, age, breed, sound,course) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
    this.course = course;
  }

  //adding method
  speak(){
      console.log(this.sound);
    //   const string = this.age.toString();
    //   return string;

  }
  addCource(course){
      this.courses.pus(course);
  }
}
const ernie = new Pet("dog", 1, "pug", "yep pep");
const vera = new Pet("dog", 8, "border collie","woof woof");

console.log(ernie);

ernie.speak();
vera.speak();
