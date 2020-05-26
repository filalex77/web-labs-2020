import { range } from "./range.ts";
import { factorial } from "./factorial.ts";

export const combination = (n: number, r: number): number =>
  Math.trunc(factorial(n) / (factorial(r) * factorial(n - r)));

export const combinations = (c: number): Array<number> =>
  range(c + 1).map((x) => combination(c, x));
