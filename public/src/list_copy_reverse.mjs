import { list_reverse } from "./list_reverse.mjs";
import { list_copy } from "./list_copy.mjs";
export function list_copy_reverse(list) {
  let result = list_copy(list);
  list_reverse(result);
  return result;
}
