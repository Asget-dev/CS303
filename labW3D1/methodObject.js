let animal = {
    walk : function(){
        if(!this.isSleeping){
            alert('I walk');
        }
    },
    sleep: function(){
        this.isSleeping = true;
    }
};
let rabbit = Object.create(animal);
rabbit.name = "White Rabbit";

//modifies rabbit.isSleeping
rabbit.sleep();//this is refer to rabit
console.log(rabbit.isSleeping);//true
console.log(animal.isSleeping)//undefined(no such property)

