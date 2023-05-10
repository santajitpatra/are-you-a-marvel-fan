var readlineSync = require("readline-sync");

var score = 0;
var highScores = [
  {
    name: "Rama",
    score: 5,
  },

  {
    name: "Joy",
    score: 3,
  },
]

var questions = [
  {
    question: "Do you know what's Iron Man's real name?",
    answer: "Tony Stark"

  },  {
    question: "Do you know what's Thor's real name?",
    answer: "Thor Odinson"
  },  {
    question: "Do you know what's Hulk's real name?",
    answer: "Bruce Banner"
  },  {
    question: "Do you know what's Black Widow's real name?",
    answer: "Natasha Romanoff"
  },  {
    question: "Do you know what's Hawkeye's real name?",
    answer: "Clint Barton"
  },  {
    question: "Do you know what's Wolverine's real name?",
    answer: "James Howlett"
  },  {
    question: "Do you know what's Deadpool's real name?",
    answer: "Wade Wilson"
  },
 {
  question: "What's the full and original name of Captain America?",
  answer: "Steve Rogers"
}, {
  question: "What's Thor's hammer called?",
  answer: "Mjolnir"
},
{
  question: "Do you know what's Spiderman's real name?",
  answer: "Peter Parker"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " let's see if you know Marvel Cinematic Universe");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
