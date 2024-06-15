import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
export function list_adder_multiple(count, lambda) {
  let result = list_map(range(count), (i) => []);
  lambda((item, i) => list_add(list_get(result, i), item));
  return result;
}
