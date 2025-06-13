import { list_includes } from "./list_includes.mjs";
export function list_includes_any(split, items_to_exclude) {
  for (let item of items_to_exclude) {
    if (list_includes(split, item)) {
      let v = true;
      return v;
    }
  }
  let v2 = false;
  return v2;
}
