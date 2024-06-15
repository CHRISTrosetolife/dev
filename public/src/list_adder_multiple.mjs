import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
export function list_adder_multiple(count, lambda) {
  let result = list_map(range(count), (i) => []);
  lambda((item) => list_add(result, item));
  return result;
}
