import { js_code_brackets_inside } from "./js_code_brackets_inside.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function js_code_array(contents_list) {
  return js_code_brackets_inside(list_join_comma_space(contents_list));
}
