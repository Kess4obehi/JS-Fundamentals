const args = process.argv.slice(2);
const argsOne = args[0];
const value = Number(argsOne);

if (isNaN(argsOne)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${value}`);
}