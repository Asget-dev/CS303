class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  //getSummery
  getSummery = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
  //getAge
  getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  };

  //Revise / change year
  revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
  };

  //this helps you dont have to instantiate it
  static topBookStore(){
      return 'Barner and Bobel';
  }
}

//Instantiate Object
const book1 = new Book("book one", "John Doe", "2013");
console.log(book1);
book1.revise("2018");
console.log(book1);

console.log(book1.getAge())
//console the class
console.log(Book.topBookStore());
