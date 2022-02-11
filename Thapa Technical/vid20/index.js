// Events Module in Node.JS

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Your name is Divyansh Mittal!");
})

event.emit("sayMyName")

event.on("tellAboutYourStatusCode", (statusCode, msg) => {
    console.log(`Your status code is ${statusCode} and message is ${msg}`);
})

event.emit("tellAboutYourStatusCode", 200, "OK")
event.emit("tellAboutYourStatusCode", 404, "Error")