import { range } from "./range.mjs";
import { each } from "./each.mjs";
export function each_range(atom_count, lambda) {
  each(range(atom_count), lambda);
}
