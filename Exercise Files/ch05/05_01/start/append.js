const fs = require("fs");
const colorData = require("./assets/colors.json");

// This is especially useful tool for me and my work becouse I can make
// CSV files like this. data, data, data \n 
colorData.colorList.forEach(c => {
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, err => {
        if(err){throw err}
    });
});

