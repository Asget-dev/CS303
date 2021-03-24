"use strict";
const teacher = {
    firstName : "Ashley",
    lastName : "Boucher",
    isTurn: true,
    printName: function(){
      console.log(this.firstName + " "+ this.lastName);
    },
    play: function(){
        if(this.isTurn){
            return teacher.firstName + "is now here";
        }
      },
 }
 console.log(teacher.firstName);
 console.log(teacher["lastName"]);

//or
 let prop = 'lastName';
 console.log(teacher[prop]);

 //to call the method
 teacher['printName']();

 

