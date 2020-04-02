const collectAnswers = require("./lib/collectAnswers");

// Questions array
const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

// Main function call that starts the script
// sending an array of questions and call back ones we have them
const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer =>
    console.log(`question answered: ${answer}`)
);

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers.");
    console.log(answers);
});

answerEvents.on("complete", () => process.exit());