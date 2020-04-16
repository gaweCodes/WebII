console.log("Task 1-1-1");
console.log("-----------------------------");
var a = 10;
var b = "javascript";
var c = true;
var d = 2.345;
a = b;
d = c;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof a);
console.log(typeof d);

console.log("\nTask 1-1-2");
console.log("-----------------------------");
var number = 3;
if (number === 2 || number === 4) {
  console.log("The number is even.");
} else if (number === 3) {
  console.log("The number is odd.");
} else if (number === 5) {
  console.log("The number is a prime number");
} else {
  console.log("invalid value");
}

console.log("\nTask 1-1-3");
console.log("-----------------------------");
console.log(true === 1);
console.log(4 == "4");
console.log(new Array() == false);
console.log(null == "null");
console.log("" != false);
console.log((3 < 2 && 2 != 3) || 3 > 4);
