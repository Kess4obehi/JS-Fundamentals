const args = process.argv.slice(2);
const argOne = args[0];
const argTwo = args[1];
const num1 = Number(argOne);
const num2 = Number(argTwo);

function add(a, b) {
  console.log(a + b);
}

add(num1, num2);