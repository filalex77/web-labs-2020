import { combinations } from "./combination.ts";
import { range } from "./range.ts";

export default class PascalTriangle {
  rows: number[][];

  constructor(n: number) {
    this.rows = range(n).map((x) => combinations(x));
  }

  toString() {
    return this.rows
      .map((row, i) =>
        `|${i}|`.concat(
          " ".repeat(this.rows.length - i).concat(row.join(" ")),
        )
      )
      .join("\n");
  }
}
