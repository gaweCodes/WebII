console.log("Task 1-2-1");
console.log("-----------------------------");
let counter = 1;
const max = 20;
while (counter <= max) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}

console.log("\nTask 1-2-2");
console.log("-----------------------------");
const maxFib = 10;
let a = 1;
let b = 0;
let c = 0;
for (let i = 1; i <= maxFib; i++) {
  const c = a + b;
  console.log(c);
  a = b;
  b = c;
}
