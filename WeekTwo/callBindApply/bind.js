const userOne = {
    firstName:"Asgedom",
    lastName:"Haile"
}
const userTwo={
    firstName : "Petros",
    lastName:"Asgedom"
}
const fullname= function(){
    return `${this.firstName} , ${this.lastName}`;
}
const Asgedom = fullname.bind(userOne);
const Petros = fullname.bind(userTwo);
console.log(Asgedom());
console.log(Petros());