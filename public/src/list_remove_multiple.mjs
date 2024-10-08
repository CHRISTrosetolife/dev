import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
export function list_remove_multiple(list, removals) {
  each(removals, (removal) => {
    list_remove(list, removal);
  });
}
