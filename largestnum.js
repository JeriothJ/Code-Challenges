// 1. Find the Largest of Three Numbers
// Write a program that finds the largest of three numbers using if-else statements.

let a1 = 15,
  a2 = 52,
  a3 = 200,
  a = [];
if (a1 > a2) {
  if (a1 > a3) {
    console.log(a1);
  } else {
    console.log(a3);
  }
} else if (a2 > a3) {
  console.log(a2);
} else {
  console.log(a3);
}
