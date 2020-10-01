const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// dummy function assigned to done by default to protect code
module.exports = (questions, done = f => f) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    }

    rl.question(firstQuestion, questionAnswered);
}
