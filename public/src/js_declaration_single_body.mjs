import { js_declaration_to_body } from "./js_declaration_to_body.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
export function js_declaration_single_body(ast) {
  let d = js_declaration_single(ast);
  let body_block = js_declaration_to_body(d);
  return body_block;
}
