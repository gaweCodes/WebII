console.log("Task 1-4-1-1");
console.log("-----------------------------");
let cube = {
  number: undefined,
  roll: function () {
    const min = 1;
    const max = 6;
    this.number = Math.floor(Math.random() * max) + min;
  },
};
cube.roll();
console.log(cube.number);

console.log("\nTask 1-4-1-2");
console.log("-----------------------------");
cube = new Object();
cube.number = undefined;
cube.roll = function () {
  const min = 1;
  const max = 6;
  this.number = Math.floor(Math.random() * max) + min;
};
cube.roll();
console.log(cube.number);

console.log("\nTask 1-4-1-3");
console.log("-----------------------------");
function YatzyCube(id) {
  this.id = id;
  this.number = undefined;
  this.roll = function () {
    const min = 1;
    const max = 6;
    this.number = Math.floor(Math.random() * max) + min;
  };
}
const yatzyCubes = new Array(5);
for (let i = 0; i < 5; i++) {
  yatzyCubes.push(new YatzyCube(i + 1));
}
yatzyCubes.forEach((cube) => {
  cube.roll();
  console.log("Cube-ID: " + cube.id + " Cube-Value: " + cube.number);
});

console.log("\nTask 1-4-1-4");
console.log("-----------------------------");
yatzyCubes.forEach((cube) => {
  cube.roll();
});

console.log(
  Object.keys(yatzyCubes)
    .map((key) => {
      return yatzyCubes[key].number;
    })
    .join(", ")
);
