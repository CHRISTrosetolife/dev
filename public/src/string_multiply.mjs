import { string_combine } from "./string_combine.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { range } from "./range.mjs";
export function string_multiply(input, count) {
  let s = input;
  for (let j of range(subtract_1(count))) {
    s = string_combine(s, input);
  }
  return s;
}
