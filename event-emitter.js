const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// listener
myEmitter.on("ramadan", () => {
  console.log("WELCOME RAMADAN");
});

myEmitter.on("ramadan", (iftar) => {
  console.log(`I WILL FAST 30 DAYS & DO ${iftar}`);
});

myEmitter.emit("ramadan", "Iftar");
