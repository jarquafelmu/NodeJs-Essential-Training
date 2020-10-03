const fs = require(`fs`);

const writeStream = fs.createWriteStream(`./assets/myFile.txt`, `utf8`);

process.stdin.on(`data`, data => {
    writeStream.write(data);
})
