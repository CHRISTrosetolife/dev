import { list_set } from "./list_set.mjs";
import { list_get } from "./list_get.mjs";
import { integer_random } from "./integer_random.mjs";
import { each_from } from "./each_from.mjs";
export function list_scramble_from(low, high, scrambled) {
  each_from(low, high, function lambda(i) {
    let j = integer_random(i, high);
    let temp = list_get(scrambled, j);
    list_set(scrambled, j, list_get(scrambled, i));
    list_set(scrambled, i, temp);
  });
}
