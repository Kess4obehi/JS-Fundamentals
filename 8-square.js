const args = process.argv.slice(2);
const argOne = args[0];
const size = Number(argOne);
const char = "X";
if (isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log(char.repeat(size));
  }
}