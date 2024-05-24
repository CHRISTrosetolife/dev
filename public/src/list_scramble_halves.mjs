import { floor } from "./floor.mjs";
import { list_scramble_from } from "./list_scramble_from.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { divide } from "./divide.mjs";
import { add_1 } from "./add_1.mjs";
export function list_scramble_halves(list) {
  let low = 0;
  let high = list_index_last(list);
  let mid = floor(divide(high, 2));
  list_scramble_from(low, mid, list);
  list_scramble_from(add_1(mid), high, list);
  return list;
}
