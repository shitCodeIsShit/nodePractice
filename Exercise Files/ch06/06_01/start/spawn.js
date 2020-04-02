const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"])

questionApp.stdin.write("wolde\n")
questionApp.stdin.write("lahnus\n")
questionApp.stdin.write("hack\n")


questionApp.stdout.on("data", data => {
    console.log(`for the question app: ${data}`)
})

questionApp.on("close", () => {
    console.log(`questionApp process exited`)
})