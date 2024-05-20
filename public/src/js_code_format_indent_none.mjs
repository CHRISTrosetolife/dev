import { js_unparse_indent_none } from "./js_unparse_indent_none.mjs";
import { js_parse } from "./js_parse.mjs";
export function js_code_format_indent_none(code) {
  let parsed = js_parse(code);
  return js_unparse_indent_none(parsed);
}
