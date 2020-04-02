const readline = require("readline");
const {EventEmitter} = require("events");

// Arrow function to get user input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arrow function for getting the answers from user
// the f arrow function is there so you dont get an error on done its optional
// still works without the call back
module.exports = (questions, done = f => f) => {

    const answers = [];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter();

    const questionAnswered = answer => {
        // emitting a answer event
        emitter.emit("answer", answer);
        answers.push(answer);
        if(answers.length < questions.length){
            rl.question(questions[answers.length], questionAnswered);
        }else{
            emitter.emit("complete", answers);
            done(answers);
        }

    };

    rl.question(firstQuestion, questionAnswered);

    return emitter;
};