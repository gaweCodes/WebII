console.log("Task 1-3-1-1");
console.log("-----------------------------");
const students = ["Gabriel", "Thomas", "Adam", "Marc", "Simon"];
for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
  console.log(students[studentIndex]);
}

console.log("\nTask 1-3-1-2");
console.log("-----------------------------");
const orderedStudents = students.sort();
for (
  let studentIndex = 0;
  studentIndex < orderedStudents.length;
  studentIndex++
) {
  console.log(orderedStudents[studentIndex]);
}

console.log("\nTask 1-3-1-2");
console.log("-----------------------------");
console.log(orderedStudents.join(", "));

let animals = ["cat", "dog", "hare"];
console.log("\nTask 1-3-2-1");
console.log("-----------------------------");
animals.push("duck");
animals.forEach((animal) => console.log(animal));

console.log("\nTask 1-3-2-2");
console.log("-----------------------------");
console.log(animals.shift());
