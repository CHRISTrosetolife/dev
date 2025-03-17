import { range_from } from "./range_from.mjs";
import { each } from "./each.mjs";
export function each_range_from(n, lambda) {
  each(range_from(n), lambda);
}
