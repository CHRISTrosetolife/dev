import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { js_code_braces_inside } from "./js_code_braces_inside.mjs";
export function js_code_destructure(params_names) {
  return js_code_braces_inside(list_join_comma_space(params_names));
}
