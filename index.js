#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([{
        message: chalk.cyan("Enter The Sentance To Count The Words"),
        name: "sentence",
        type: "input"
    }]);
const words = answer.sentence.trim().split(" ");
const letters = answer.sentence.trim().replace(/\s/g, '');
console.log(chalk.green(`There Are ${words.length} Words And ${letters.length} Letters in Your Sentence`));
