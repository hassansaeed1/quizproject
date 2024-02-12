#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
async function welcome() {
    let title = chalkAnimation.pulse("Develp by Hassan Sheikh\nLet's Start Quizes");
    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
    title.stop();
}
await welcome();
async function askQuestion() {
    const asnwers = await inquirer.prompt([
        {
            type: "list",
            name: "QuestionNo1",
            choices: ["Amazon", "Microsoft", "Typescript", "Oracle"],
            message: "Which of the following companies developed Typescript?",
        },
        {
            type: "list",
            name: "QuestionNo2",
            choices: ["Gradual", "Duck", "Dynamic", "All of the Above"],
            message: "what is the typing priciple of typescript?",
        },
        {
            type: "list",
            name: "QuestionNo3",
            choices: [".tt", ".tsx", ".nod", ".ts"],
            message: "Which of the following filenames is the extension for typescript?",
        },
        {
            type: "list",
            name: "QuestionNo4",
            choices: ["Javascript", "C#", "Java", "All of the Above"],
            message: "Which of the computer programming languages below has influenced the creation of typescript?",
        },
    ]);
    const marks = 10;
    const fail = 0;
    if (asnwers.QuestionNo1 === "Microsoft") {
        console.log(chalk.green(`Your Answer is Correct you Got ${marks} marks`));
    }
    else {
        console.log(chalk.red(`Incorrect Answer You Got ${fail} marks`));
    }
    if (asnwers.QuestionNo2 === "Dynamic") {
        console.log(chalk.blue(`Your Answer is Correct you Got ${marks} marks`));
    }
    else {
        console.log(chalk.red(`Incorrect Answer You Got ${fail} marks`));
    }
    if (asnwers.QuestionNo3 === ".ts") {
        console.log(chalk.green(`Your Answer is Correct you Got ${marks} marks`));
    }
    else {
        console.log(chalk.red(`Incorrect Answer You Got ${fail} marks`));
    }
    if (asnwers.QuestionNo4 === "Javascript") {
        console.log(chalk.green(`Your Answer is Correct you Got ${marks} marks`));
    }
    else {
        console.log(chalk.red(`Incorrect Answer You Got ${fail} marks`));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue your quiz? Press (y/n)"
        });
    } while (again.restart === "y" ||
        again.restart === "Y" ||
        again.restart === "yes" ||
        again.restart === "YES");
}
startAgain();
