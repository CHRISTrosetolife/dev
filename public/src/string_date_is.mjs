import { integer_parse_try } from "./integer_parse_try.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { list_all } from "./list_all.mjs";
export function string_date_is(trimmed) {
  let newLocal = string_split_comma(trimmed);
  return list_all(newLocal, (s) => integer_parse_try(s) !== null);
}
