import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { js_imports_remove } from "./js_imports_remove.mjs";
import { function_imports_add } from "./function_imports_add.mjs";
import { js_body_nested } from "./js_body_nested.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_declaration_to_name } from "./js_declaration_to_name.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_map } from "./list_map.mjs";
import { js_imports_add_specified } from "./js_imports_add_specified.mjs";
export async function js_outside_move(ast) {
  let type = "FunctionDeclaration";
  let { body: body_ast } = ast;
  let declarations = list_filter(body_ast, (b) => b.type === type);
  let copy = list_copy(declarations);
  for (let declaration of copy) {
    let function_name = js_declaration_to_name(declaration);
    let { params } = declaration;
    let { async } = declaration;
    let args = list_map(params, (p) => p.name);
    let args_string = list_join_comma(args);
    let body = js_body_nested(declaration);
    let parsed = js_parse(string_combine_multiple([]));
    parsed.body = body;
    let unparsed = js_unparse(parsed);
    await function_new_generic_code(
      function_name,
      args_string,
      unparsed,
      false,
      [],
      async,
      false,
    );
  }
  for (let declaration of copy) {
    let function_name = js_declaration_to_name(declaration);
    await function_imports_add(function_name);
    list_remove(body_ast, declaration);
  }
  let names = list_map(copy, js_declaration_to_name);
  js_imports_add_specified(ast, names);
  js_imports_remove(ast);
  return {
    function_names_new: list_map(copy, js_declaration_to_name),
  };
}
