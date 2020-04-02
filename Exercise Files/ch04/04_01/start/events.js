const events = require("events");

const emitter = new events.EventEmitter();

// This on function handels the event that happens when you call event named
// customEvent | evens are async
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});


process.stdin.on("data", data => {

    const input = data.toString().trim();
    if(input === "exit"){
        // This is a event
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit();
    }
    // This is also an event
    emitter.emit("customEvent", input, "terminal");

});