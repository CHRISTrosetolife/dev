import { list_join_empty } from "./list_join_empty.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { list_unique } from "./list_unique.mjs";
export function list_to_letters(cebuano_alternatives) {
  return list_unique(string_split_empty(list_join_empty(cebuano_alternatives)));
}
