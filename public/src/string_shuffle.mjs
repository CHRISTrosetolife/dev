import { list_join_empty } from "./list_join_empty.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_to } from "./list_to.mjs";
export function string_shuffle(items) {
  let list = list_to(items);
  list_shuffle(list);
  return list_join_empty(list);
}
