import { js_string } from "./js_string.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_code_string(s) {
  let code2 = js_string(s);
  let unparsed = js_unparse(code2);
  return unparsed;
}
