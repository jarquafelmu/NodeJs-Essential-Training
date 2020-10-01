const fs = require(`fs`);

fs.readFile(`./assets/alex.pg`, (err, img) => {
    if (err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log(`file contents read`);
    console.log(img);
});
