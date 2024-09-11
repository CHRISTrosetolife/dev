import { log } from "./log.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { list_all } from "./list_all.mjs";
export function string_date_is(trimmed) {
  let split = string_split_comma(trimmed);
  log({
    split,
  });
  return list_all(split, (s) => integer_parse_try(s) !== null);
}
