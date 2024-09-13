import { list_index } from "./list_index.mjs";
export function list_index_before(list, item, target) {
  return list_index(list, item) < list_index(list, target);
}
