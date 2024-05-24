import { floor } from "./floor.mjs";
import { list_scramble_from } from "./list_scramble_from.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { divide } from "./divide.mjs";
export function list_scramble_halves(scrambled) {
  let low = 0;
  let high = list_index_last(scrambled);
  let mid = floor(divide(high, 2));
  list_scramble_from(low, high, scrambled);
}
