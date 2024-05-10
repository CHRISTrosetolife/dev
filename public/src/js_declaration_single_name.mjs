import { js_declaration_single } from "./js_declaration_single.mjs";
export function js_declaration_single_name(ast) {
  let declaration = js_declaration_single(ast);
  let { id } = declaration;
  let name = id.name;
  return name;
}
