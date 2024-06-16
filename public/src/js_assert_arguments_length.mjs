import { js_declaration_single } from "./js_declaration_single.mjs";
export function js_assert_arguments_length(ast) {
  let d = js_declaration_single(ast);
  let { body } = d;
  return body;
}
