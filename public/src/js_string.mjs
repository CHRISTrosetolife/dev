import { object_property_delete } from "./object_property_delete.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_string(s) {
  let code2 = js_parse_expression(string_delimit(""));
  code2.value = s;
  let property = "raw";
  object_property_delete(code2, property);
  return code2;
}
