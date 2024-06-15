import { list_index } from "./list_index.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
export function list_adder_multiple(count, lambda) {
  let result = list_map(range(count), (i) => []);
  lambda((list_index, item) => {
    let list = list_get(result, list_index);
    list_add(list, item);
  });
  return result;
}
