import { js_code_array } from "./js_code_array.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { list_map } from "./list_map.mjs";
export function js_code_array_string(split) {
  let mapped = list_map(split, (s) => string_delimit(s));
  let list_code = js_code_array(mapped);
  return list_code;
}
