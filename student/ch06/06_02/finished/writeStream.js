const fs = require(`fs`);

const writeStream = fs.createWriteStream(`./assets/myFile.txt`, `utf8`);
const readStream = fs.createReadStream(`./assets/lorum-ipsum.md`, `utf8`);

process.stdin.pipe(writeStream);
