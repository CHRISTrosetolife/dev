import { js_code_string } from "./js_code_string.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_map } from "./list_map.mjs";
export function js_code_array_string(split) {
  let mapped = list_map(split, js_code_string);
  let list_code = js_code_array(mapped);
  return list_code;
}
