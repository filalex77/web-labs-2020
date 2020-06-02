const range = (n: number) => [...Array(n).keys()];
const lastDigit = (n: number) => n % 10;
const twoLastDigits = (n: number) => n % 100;

function verse(n: number) {
  let remainingBottles = n - 1;
  let remainingBottlesEnding = lastDigit(remainingBottles) == 1 &&
    twoLastDigits(remainingBottles) != 11
    ? "ась"
    : "ось";

  let bottlesEnding;
  if (n == 1) {
    bottlesEnding = "ка";
  } else if ([2, 3, 4].includes(lastDigit(n))) {
    bottlesEnding = "ки";
  } else {
    bottlesEnding = "ок";
  }

  return n == 0
    ? `Жодної пляшки не стоїть на стіні`
    : `${n} пляш${bottlesEnding} стоїть на стіні, одна упала і залишил${remainingBottlesEnding} ${n -
      1}`;
}

function lyrics(n: number) {
  return range(n + 1)
    .reverse()
    .map((x) => verse(x))
    .join("\n");
}

console.log(lyrics(23));
