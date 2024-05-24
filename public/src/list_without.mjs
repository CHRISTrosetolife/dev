import { list_remove } from "./list_remove.mjs";
import { list_copy } from "./list_copy.mjs";
export function list_without(atom, pair) {
  let pairs_other = list_copy(atom);
  list_remove(pairs_other, pair);
  return pairs_other;
}
