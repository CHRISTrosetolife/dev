import { js_declaration_to_name } from "./js_declaration_to_name.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
export function js_declaration_single_name(ast) {
  let d = js_declaration_single(ast);
  let name = js_declaration_to_name(d);
  return name;
}
