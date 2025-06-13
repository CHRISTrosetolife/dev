import { list_includes } from "./list_includes.mjs";
export function list_excludes(split, items_to_exclude) {
  for (let item of items_to_exclude) {
    if (list_includes(split, item)) {
      let v = false;
      return v;
    }
  }
  let v2 = true;
  return v2;
}
