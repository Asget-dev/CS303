let animal = {
    eats: true
};
let rabbit = Object.create(animal);
rabbit.jump = true;

//only print the object inside rabbit
console.log(Object.keys(rabbit))

//print all the objects including inherited
for(let key in rabbit){
    console.log(key);
}

//print only the specifice one
console.log(rabbit.hasOwnProperty('Jump'));
console.log(rabbit.hasOwnProperty('eats'));