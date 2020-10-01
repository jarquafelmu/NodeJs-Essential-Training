const fs = require(`fs`);

const text = fs.readFileSync(`./assets/Readme.md`, `utf8`);

console.log(text);
