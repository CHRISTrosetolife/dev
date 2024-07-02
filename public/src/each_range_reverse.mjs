import { each_reverse } from "./each_reverse.mjs";
import { range } from "./range.mjs";
export function each_range_reverse(count, lambda) {
  each_reverse(range(count), lambda);
}
