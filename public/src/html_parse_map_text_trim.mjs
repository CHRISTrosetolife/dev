import { string_trim } from "./string_trim.mjs";
import { list_map } from "./list_map.mjs";
export function html_parse_map_text_trim(parsed, list) {
  let mapped = list_map(list, (l) => parsed(l));
  let mapped2 = list_map(mapped, (m) => string_trim(m.text()));
  return mapped2;
}
