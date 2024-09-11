import { string_split_dash } from "./string_split_dash.mjs";
import { list_size } from "./list_size.mjs";
import { log } from "./log.mjs";
import { integer_parse_try } from "./integer_parse_try.mjs";
import { list_all } from "./list_all.mjs";
export function string_date_is(trimmed) {
  let split = string_split_dash(trimmed);
  log({
    split,
  });
  if (list_size(split) !== 3) {
    return false;
  }
  return list_all(split, (s) => integer_parse_try(s) !== null);
}
