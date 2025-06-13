import { list_includes_multiple } from "./list_includes_multiple.mjs";
export function list_includes_multiple_not(split, items_to_exclude) {
  return !list_includes_multiple(split, items_to_exclude);
}
