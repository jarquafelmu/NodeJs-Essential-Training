const fs = require(`fs`);

fs.rmdir(`./storage`, err => {
    if (err) throw err;
    console.log(`./storage directory removed`)
})
