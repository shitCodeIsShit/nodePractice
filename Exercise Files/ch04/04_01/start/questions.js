const readline = require("readline");

// Arrow function to get user input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Questions array
const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

// Arrow function for getting the answers from user
const collectAnswers = (questions, done) => {

    const answers = [];
    const [firstQuestion] = questions;


    const questionAnswered = answer => {
      answers.push(answer);
      if(answers.length < questions.length){
          rl.question(questions[answers.length], questionAnswered);
      }else{
          done(answers);
      }

    };

    rl.question(firstQuestion, questionAnswered);
};

// Main function call that starts the script
// sending an array of questions and call back ones we have them
collectAnswers(questions, answers => {
    console.log("Thank you for your answers.");
    console.log(answers);
    process.exit();
});