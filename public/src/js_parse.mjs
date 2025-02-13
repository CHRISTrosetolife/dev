import { js_parse_options } from "./js_parse_options.mjs";
import { web_is } from "./web_is.mjs";
let a = await import_node("acorn");
export function js_parse(code) {
  if (web_is()) {
    let a = acorn;
  }
  try {
    return a.parse(code, js_parse_options());
  } catch (e) {
    throw e;
  }
}
