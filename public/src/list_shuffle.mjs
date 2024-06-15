import { list_shuffle_from } from "./list_shuffle_from.mjs";
import { list_index_last } from "./list_index_last.mjs";
export function list_shuffle(scrambled) {
  let low = 0;
  let high = list_index_last(scrambled);
  list_shuffle_from(low, high, scrambled);
}
