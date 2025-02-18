import { js_statement_return_empty } from "./js_statement_return_empty.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function js_statement_return(argument) {
  let r = js_statement_return_empty();
  object_property_set(r, "argument", argument);
  return r;
}
