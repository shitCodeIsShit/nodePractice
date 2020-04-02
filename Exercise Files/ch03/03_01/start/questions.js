const questions = [
    "What is your name?",
    "What would you rather be doing",
    "Why are we here? Just to suffer! ",
    "What is your preferred programming language?"
];

const ask =(i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }
});

process.on('exit', () => {
    const [name, activity, suffer, language] = answers;
    console.log(`
    
    Thank you for your anwsers.
    
    Go ${activity} ${name} you can write ${language} later so you can ${suffer}!!
    
    `);
});