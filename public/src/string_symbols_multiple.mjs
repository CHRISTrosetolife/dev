import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { identity } from "./identity.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function string_symbols_multiple(list) {
  let s = list_adder_unique((la) => each(list, (item) => each(item, la)));
  list_sort_string_map(s, identity);
  return list_join_empty(s);
}
