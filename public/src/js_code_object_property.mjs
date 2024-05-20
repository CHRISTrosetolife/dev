import { js_code_key_value } from "./js_code_key_value.mjs";
import { js_code_braces_inside } from "./js_code_braces_inside.mjs";
export function js_code_object_property(b, c) {
  return js_code_braces_inside(js_code_key_value(b, c));
}
