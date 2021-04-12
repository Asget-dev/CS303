//constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year= year;
}

//getSummery
Book.prototype.getSummery = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//Magaxin Constructor
function Magazine(title,author,year,month){
    Book.call(this, title, author,year);
    this.month = month;
}
//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magaxine Object
const mag1 = new Magazine('Mag one','John one','2018','jan');


console.log(mag1);
