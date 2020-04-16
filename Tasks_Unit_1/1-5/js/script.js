console.log("Task 1-5-1-1");
console.log("-----------------------------");
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

console.log("\nTask 1-5-1-2");
console.log("-----------------------------");
let guessedNumber = undefined;
// while (guessedNumber !== randomNumber) {
//   guessedNumber = Number(
//     window.prompt("Please enter a number between 1 and 10.")
//   );
// }
// console.log("Congrats! The searched number is " + randomNumber);

// console.log("\nTask 1-5-1-3");
// console.log("-----------------------------");
// guessedNumber = undefined;
// while (guessedNumber != randomNumber && guessedNumber !== null) {
//   guessedNumber = window.prompt("Please enter a number between 1 and 10.");
// }
// if (guessedNumber !== null) {
//   console.log("Congrats! The searched number is " + randomNumber);
// }

console.log("\nTask 1-5-1-4");
console.log("-----------------------------");
// guessedNumber = undefined;
// while (guessedNumber != randomNumber && guessedNumber !== null) {
//   guessedNumber = window.prompt("Please enter a number between 1 and 10.");
//   if (guessedNumber !== null && Number(guessedNumber) === 0) {
//     console.log("You need to enter a numeric value");
//   }
// }
// if (guessedNumber !== null) {
//   console.log("Congrats! The searched number is " + randomNumber);
// }

console.log("\nTask 1-5-1-5");
console.log("-----------------------------");
// guessedNumber = undefined;
// let tries = 0;
// while (guessedNumber != randomNumber && guessedNumber !== null) {
//   tries++;
//   guessedNumber = window.prompt("Please enter a number between 1 and 10.");
//   if (guessedNumber !== null && Number(guessedNumber) === 0) {
//     showMessage("You need to enter a numeric value");
//   }
// }
// if (guessedNumber !== null) {
//   showMessage(
//     "Congrats! The searched number is " +
//       randomNumber +
//       " (tries: " +
//       tries +
//       ")"
//   );
// }

console.log("\nTask 1-5-1-6");
console.log("-----------------------------");
function showMessage(message) {
  console.log(message);
}

console.log("\nTask 1-5-1-7");
console.log("-----------------------------");
// guessedNumber = undefined;
// let tries = 0;
// while (guessedNumber !== null) {
//   tries++;
//   guessedNumber = window.prompt("Please enter a number between 1 and 10.");
//   if (guessedNumber !== null && Number(guessedNumber) === 0) {
//     showMessage("You need to enter a numeric value");
//   } else if (guessedNumber < randomNumber) {
//     showMessage("The search number is larger than " + guessedNumber);
//   } else if (guessedNumber > randomNumber) {
//     showMessage("The search number is smaller than " + guessedNumber);
//   } else if (Number(guessedNumber) === randomNumber) {
//     showMessage(
//       "Congrats! The searched number is " +
//         randomNumber +
//         " (tries: " +
//         tries +
//         ")"
//     );
//     break;
//   }
// }

console.log("\nTask 1-5-1-8");
console.log("-----------------------------");
guessedNumber = undefined;
let tries = new Array();
while (true) {
  guessedNumber = window.prompt("Please enter a number between 1 and 10.");
  if (guessedNumber === null) {
    break;
  } else if (guessedNumber !== null && Number(guessedNumber) === 0) {
    showMessage("You need to enter a numeric value");
  } else if (guessedNumber < randomNumber) {
    tries.push(guessedNumber);
    showMessage("The search number is larger than " + guessedNumber);
  } else if (guessedNumber > randomNumber) {
    tries.push(guessedNumber);
    showMessage("The search number is smaller than " + guessedNumber);
  } else {
    tries.push(guessedNumber);
    showMessage("Congrats! The searched number is " + randomNumber);
    showMessage("Your " + tries.length + " tries: " + tries.join(", "));
    break;
  }
}
