import { string_trim } from "./string_trim.mjs";
import { list_map } from "./list_map.mjs";
export function html_parse_map_text_trim(parsed, list) {
  let mapped = list_map(list, (f) => parsed(f));
  let mapped3 = list_map(mapped, (i) => string_trim(i.text()));
  return mapped3;
}
