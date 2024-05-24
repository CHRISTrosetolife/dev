import { list_scramble_from } from "./list_scramble_from.mjs";
import { list_index_last } from "./list_index_last.mjs";
export function list_scramble(scrambled) {
  let low = 0;
  let high = list_index_last(scrambled);
  list_scramble_from(low, high, scrambled);
}
