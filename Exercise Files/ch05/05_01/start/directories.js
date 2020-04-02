const fs = require("fs");

// loop to remove file from dir
fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

// Cannot remove dir if files in them
fs.rmdir("./storage", err => {
    if(err){throw err}
    console.log("Directory removes successfully...")
});

