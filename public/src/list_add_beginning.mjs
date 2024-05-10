import { list_insert } from "./list_insert.mjs";
export function list_add_beginning(list, element) {
  list_insert(list, 0, element);
}
