import { list_remove_multiple_at } from "./list_remove_multiple_at.mjs";
export function list_remove_multiple_from(ancestor_common, low, high) {
  list_remove_multiple_at(ancestor_common, low, high - low + 1);
}
