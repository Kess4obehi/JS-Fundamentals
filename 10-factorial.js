function factorial(n) {
  if (isNaN(n) || n < 0) {
    return 1;
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const args = process.argv.slice(2);
const argNum = args[0];
const num = Number(argNum);
console.log(factorial(num));