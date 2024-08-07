import { list_join_empty } from "./list_join_empty.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_to } from "./list_to.mjs";
export function string_filter(word, lambda) {
  let l = list_to(word);
  let f = list_filter(l, lambda);
  return list_join_empty(f);
}
