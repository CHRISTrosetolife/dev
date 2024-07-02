import { range } from "./range.mjs";
import { each } from "./each.mjs";
export function each_range_reverse(count, lambda) {
  each(range(count), lambda);
}
