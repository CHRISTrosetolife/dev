import { list_add } from "./list_add.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export function list_add_if_exists_not(list, item) {
  if (list_includes_not(list, item)) {
    list_add(list, item);
  }
}
