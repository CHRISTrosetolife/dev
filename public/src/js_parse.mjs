import { import_multi } from "./import_multi.mjs";
import { import_node } from "./import_node.mjs";
import { js_parse_options } from "./js_parse_options.mjs";
import { web_is } from "./web_is.mjs";
let a = await import_node("acorn");
export function js_parse(code) {
  if (web_is()) {
    a = acorn;
  }
  return a.parse(code, js_parse_options());
}
