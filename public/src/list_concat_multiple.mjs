import { list_add_multiple } from "./list_add_multiple.mjs";
export function list_concat_multiple(lists) {
  let result = [];
  for (let list of lists) {
    list_add_multiple(result, list);
  }
  return result;
}
