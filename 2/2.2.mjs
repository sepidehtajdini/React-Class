import axios from 'axios';
import chalk from "chalk";
const id = process.argv[2];
axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(function (json) {
        const title = json.data.title
        const comp = json.data.completed;

        if (comp === true) {
            console.log(chalk.green(title))
        } else {
            console.log(chalk.red(title))
        }
    });
