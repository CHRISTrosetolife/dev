import { list_to } from "./list_to.mjs";
import { set_add } from "./set_add.mjs";
import { set_includes } from "./set_includes.mjs";
import { each } from "./each.mjs";
import { set_new } from "./set_new.mjs";
export function list_duplicates(names) {
  let duplicates = set_new();
  let existing = set_new();
  each(names, function (item) {
    if (set_includes(existing, item)) {
      set_add(duplicates, item);
    } else {
      set_add(existing, item);
    }
  });
  let ds = list_to(duplicates);
  return ds;
}
