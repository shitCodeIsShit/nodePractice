const fs = require("fs");

// rename blocking code
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

// rename async + you can move a file with this method too
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if(err){throw err}
});

// deleting file with a 4 sec wait
setTimeout(() => {
    fs.unlinkSync("./assets/alex.jpg");
}, 4000);