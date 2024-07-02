import { js_declaration_single } from "./js_declaration_single.mjs";
import { equal } from "./equal.mjs";
import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
export function js_param_actual(ast, function_name, lambda) {
  let name = js_declaration_single_name(ast);
  if (!equal(name, function_name)) {
    return;
  }
  let declaration = js_declaration_single(ast);
  let { params } = declaration;
  return params;
}
