import { object_property_get } from "./object_property_get.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { line_read } from "./line_read.mjs";
export async function js_terminal_to_string() {
  let code = await line_read();
  let parsed = js_parse_expression(code);
  let value = object_property_get(parsed, "value");
  return value;
}
