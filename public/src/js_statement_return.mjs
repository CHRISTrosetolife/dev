import { object_property_set } from "./object_property_set.mjs";
import { js_parse_first_function } from "./js_parse_first_function.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
export function js_statement_return(argument) {
  let r_code = js_code_statement_return("");
  let r = js_parse_first_function(r_code);
  object_property_set(r, "argument", argument);
  return r;
}
