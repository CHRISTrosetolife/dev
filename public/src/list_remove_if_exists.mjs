import { list_remove } from "./list_remove.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_remove_if_exists(value, key) {
  if (list_includes(value, key)) {
    list_remove(value, key);
  }
}
