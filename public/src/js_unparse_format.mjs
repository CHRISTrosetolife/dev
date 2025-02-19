import { js_code_format } from "./js_code_format.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function js_unparse_format(parsed) {
  let unparsed = js_unparse(parsed);
  unparsed = await js_code_format(unparsed);
  return unparsed;
}
