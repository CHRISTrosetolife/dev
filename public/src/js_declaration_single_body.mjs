import { js_declaration_single } from "./js_declaration_single.mjs";
export function js_declaration_single_body(ast) {
  let d = js_declaration_single(ast);
  let { body: body_d } = d;
  let { body: b } = body_d;
  let body_block = b;
  return body_block;
}
