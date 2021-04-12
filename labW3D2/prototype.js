//constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year= year;
    // this.getSummary= function(){
    //     return `${this.title} was written by ${this.author} in ${this.year}`;
    // }
}

//getSummery
Book.prototype.getSummery = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
//getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

//Revise / change year
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}
const book1 = new Book( 'Book One','John','2020');
const book2 = new Book( 'Book tow','John Done','2021');
// console.log(book1.getSummery());
// console.log(book2);
// console.log(book1.getAge());
console.log(book2);
book2.revise('2018');
console.log(book2);