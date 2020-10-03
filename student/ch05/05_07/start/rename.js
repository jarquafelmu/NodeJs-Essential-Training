const fs = require('fs');

// rename file
fs.renameSync(`./assets/colors.json`, `./assets/colorData.json`);

// move file
fs.rename(`./assets/notes.md`, `./storage-files/notes.md`, err => {
    if (err) throw err;
})

setTimeout(() => {
    // delete file
    fs.unlinkSync(`./assets/alex.jpg`);
}, 4000);
