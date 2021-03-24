"use strict";
const pets=[
    {
        name: 'Joey',
        type: 'Dog',
        breed: 'Australian Shepherd',
        age: 8,
        photo: 'img/aussie.jpg',
        status: function (){
            console.log("woof");
        }
      },
      { 
        name: 'Patches',
        type: 'Cat',
        breed: 'Domestic Shorthair',
        age: 1,
        photo: 'img/tabby.jpg'
      },
      { 
        name: 'Pugsley',
        type: 'Dog',
        breed: 'Pug',
        age: 6,
        photo: 'img/pug.jpg'
      },
      { 
        name: 'Simba',
        type: 'Cat',
        breed: 'Persian',
        age: 5,
        photo: 'img/persian.jpg'
      },
      { 
        name: 'Comet',
        type: 'Dog',
        breed: 'Golden Retriever',
        age: 3,
        photo: 'img/golden.jpg'
      }
    ];

    
    for(let i=0; i<pets.length;i++){
console.log(`${pets[i].name} type: ${pets[i].type}`);
    }
