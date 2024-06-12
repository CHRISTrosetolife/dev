import { each } from "./each.mjs";
import { identity } from "./identity.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
export function string_symbols(text) {
  let list = [text];
  let s = list_adder_unique((la) => each(text, la));
  list_sort_string(s, identity);
  return list_join_empty(s);
}
