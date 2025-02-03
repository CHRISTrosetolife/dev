import { list_all_or } from "./list_all_or.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
export function string_all_or(username, fns) {
  let list = string_split_empty(username);
  list_all_or(list, fns);
  return list;
}
