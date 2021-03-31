const p ={
    name: "John",
    birthday: "2020-9-10",
    getAge: function(){
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(this.birthDate).getFullYear();
        return currentYear - birthYear;
    }
}
console.log(p.getAge());

// The following will cause a syntax error

// let [firstName, surname] = "Baba Louie".split(``);
// let {firstName, surname} = "Ilya Kantor".split(' ');

let user = {};
[user.name, user.surname] = "John smith".split(" ");
console.log(user);