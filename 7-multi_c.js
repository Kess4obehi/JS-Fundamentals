const args = process.argv.slice(2);
let argsOne = args[0];
let value = Number(argsOne);
if (isNaN(value)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < value; i++) {
    console.log("C is fun");
  }
}