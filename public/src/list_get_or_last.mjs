import { list_get } from "./list_get.mjs";
import { list_last } from "./list_last.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { greater_than } from "./greater_than.mjs";
export function list_get_or_last(right, group) {
  let gr;
  if (greater_than(right, list_index_last(group))) {
    gr = list_last(group);
  } else {
    gr = list_get(group, right);
  }
  return gr;
}
