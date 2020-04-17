console.log("Task 2-1-1");
console.log("-----------------------------");
console.log("Height: " + screen.height + "px, Width: " + screen.width + "px");

console.log("\nTask 2-1-2");
console.log("-----------------------------");
console.log(location.hostname);
console.log(location.protocol);

console.log("\nTask 2-1-3");
console.log("-----------------------------");
Object.keys(Object.getPrototypeOf(history)).forEach((k) =>
  console.log(k + " = " + history[k])
);
