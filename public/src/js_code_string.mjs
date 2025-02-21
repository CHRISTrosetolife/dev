import { object_property_delete } from "./object_property_delete.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_code_string(s) {
  let node = js_parse_expression(string_delimit(""));
  node.value = value;
  let property = "raw";
  object_property_delete(node, property);
  let unparsed = js_unparse(node);
  return unparsed;
}
