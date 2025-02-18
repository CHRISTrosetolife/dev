import { js_code_statement_return_empty } from "./js_code_statement_return_empty.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_parse_first_function } from "./js_parse_first_function.mjs";
export function js_statement_return(argument) {
  let r_code = js_code_statement_return_empty();
  let r = js_parse_first_function(r_code);
  object_property_set(r, "argument", argument);
  return r;
}
