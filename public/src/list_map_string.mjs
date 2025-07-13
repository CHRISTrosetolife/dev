import { string_to } from "./string_to.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_string(d) {
  let v = list_map(d, string_to);
  return v;
}
