import fs from "fs";
import chalk from "chalk";
const matn = "salam";
const files = fs.readdirSync(".");
for (let i = 0; i < files.length; i++) {
    if (fs.statSync(files[i]).isDirectory()) continue;
    const desiredFile = fs.readFileSync(files[i], "utf-8");
    if (desiredFile.includes(matn) && files[i] !== "3.1.mjs") {
        const redMatn = chalk.red(matn);
        console.log(desiredFile.replaceAll(matn, redMatn))
    }
}
