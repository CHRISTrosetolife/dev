import { js_code_function_declare } from "./js_code_function_declare.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_first } from "./list_first.mjs";
export function js_parse_first(code) {
  js_code_function_declare("", "", code);
  let parsed = js_parse(code);
  let { body } = parsed;
  let first = list_first(body);
  return first;
}
