const fs = require(`fs`);

const writeStream = fs.createWriteStream(`./assets/myFile.txt`, `utf8`);

writeStream.write(`hello`);
writeStream.write(` world\n`);
