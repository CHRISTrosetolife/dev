import { js_visit_calls } from "./js_visit_calls.mjs";
import { js_declaration_to_params } from "./js_declaration_to_params.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
import { equal } from "./equal.mjs";
export function js_param_generic(ast, function_name, on_caller, on_define) {
  js_visit_calls(ast, function_name, function (args) {
    on_caller(args);
  });
  let name = js_declaration_single_name(ast);
  if (!equal(name, function_name)) {
    return;
  }
  let declaration = js_declaration_single(ast);
  let params = js_declaration_to_params(declaration);
  on_define(params, declaration, ast);
}
