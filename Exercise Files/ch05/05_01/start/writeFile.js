const fs = require("fs");

const md = `
#This is a new file

we can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

all done

`;


fs.writeFile("./assets/notes.md", md.trim(), err => {
    if(err){throw err}
    console.log("File saved...");
});