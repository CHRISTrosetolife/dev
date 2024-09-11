import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
export function list_remove_multiple(tags, filtered) {
  each(tags, (tag) => {
    list_remove(filtered, tag);
  });
}
