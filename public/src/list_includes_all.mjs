import { list_includes } from "./list_includes.mjs";
export function list_includes_all(list, items_to_include) {
  for (let item of items_to_include) {
    if (!list_includes(list, item)) {
      return false;
    }
  }
  return true;
}
