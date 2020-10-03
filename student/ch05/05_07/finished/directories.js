const fs = require(`fs`);

// empty the directory
fs.readdirSync(`./storage`).forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

// remove the directory
fs.rmdir(`./storage`, err => {
    if (err) throw err;
    console.log(`./storage directory removed`)
})
