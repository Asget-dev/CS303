//constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year= year;
    this.getSummary= function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book1 = new Book( 'Book One','John','2020');
const book2 = new Book( 'Book tow','John Done','2021');
console.log(book1);
console.log(book2);

