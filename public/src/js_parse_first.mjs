import { js_code_function_declare } from "./js_code_function_declare.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_first } from "./list_first.mjs";
export function js_parse_first(code) {
  let f = js_code_function_declare("a", "", code);
  let parsed = js_parse(f);
  let { body } = parsed;
  let first = list_first(body);
  let { body: fd_body } = first;
  let fd_body_first = list_first(fd_body);
  return fd_body_first;
}
