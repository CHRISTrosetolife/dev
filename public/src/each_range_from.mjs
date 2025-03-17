import { range_from } from "./range_from.mjs";
import { each } from "./each.mjs";
export function each_range_from(from, to, lambda) {
  each(range_from(from, to), lambda);
}
