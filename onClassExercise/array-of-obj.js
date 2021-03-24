"use strict";

//array question and answer
//const questions = [["question","answer"],["question","answer"],["question","answer"],["question","answer"]]

//array of object
const questions = [
  {
    question: "How many planets are in the Solar System?",
    answer: "8",
  },
  {
    question: "How many continents are there?",
    answer: "8",
  },
 {
    question:"How many planets are in the Solar System?",
    answer:"8"
    },
    {
        question:"what year was JavasScript created?",
        answer:"1995"
        },
];

// store the number of questions ansered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

for(let i=0; i< questions.length;i++){
    let question =questions[i].question;
    let answer = questions[i].answer;
    let response = prompt(question);
    if(response===answer){
        correctAnswers++;
        correct.push(question);
    }else{
        incorrect.push(question);
    }
}



/**
 * 
function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
  <h1>You got ${correctAnswers} question(s) correct</h1>
  <h2>You got these questions right:</h2>
  <ol>${ createListItems(correct) }</ol>

  <h2>You got these questions wrong:</h2>
  <ol>${ createListItems(incorrect) }</ol>
`;

document.querySelector('main').innerHTML = html;
 */
