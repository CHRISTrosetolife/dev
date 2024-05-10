import { list_remove_at } from "./list_remove_at.mjs";
import { list_index } from "./list_index.mjs";
export function list_remove(list, element) {
  let index = list_index(list, element);
  list_remove_at(list, index);
}
