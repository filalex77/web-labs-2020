const arr: Array<{ value: number; type: string }> = [
  { value: 100, type: "USD" },
  { value: 215, type: "EUR" },
  { value: 7, type: "EUR" },
  { value: 99, type: "USD" },
  { value: 354, type: "USD" },
  { value: 12, type: "EUR" },
  { value: 77, type: "USD" },
];

// 1)
let sum = arr
  .filter((e) => e.value < 100 && e.type == "USD")
  .reduce((sum, e) => sum + e.value, 0);

console.log(`1) Sum of elements of type USD with value less than 100: ${sum}`);

// 2)
let newArr = arr
  .filter((e) => e.type == "EUR")
  .map((e) => ({ ...e, value: e.value * 2 }));

console.log(`2) Array of elements of type EUR with their values doubled:
${JSON.stringify(newArr, null, 2)}`);
