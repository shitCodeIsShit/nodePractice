const fs = require("fs");

console.log("Started reading files...");
// Reading files async so
fs.readdir("./assets", (err, files) => {
    if(err){throw err;}
    console.log("Complete");
    console.log(files);
});
