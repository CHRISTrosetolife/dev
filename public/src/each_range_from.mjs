import { range_1 } from "./range_1.mjs";
import { each } from "./each.mjs";
export function each_range_from(n, lambda) {
  each(range_1(n), lambda);
}
