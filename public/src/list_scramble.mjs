import { each_from } from "./each_from.mjs";
import { list_set } from "./list_set.mjs";
import { list_get } from "./list_get.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_index_last } from "./list_index_last.mjs";
export function list_scramble(scrambled) {
  let low = 0;
  let high = list_index_last(scrambled);
  each_from(low, high, lambda);
  function lambda(i) {
    let j = integer_random(i, high);
    let temp = list_get(scrambled, j);
    list_set(scrambled, j, list_get(scrambled, i));
    list_set(scrambled, i, temp);
  }
}
