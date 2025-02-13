import { app_new_generic } from "./app_new_generic.mjs";
import { list_join_semicolon } from "./list_join_semicolon.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
import { fn_name } from "./fn_name.mjs";
import { todo } from "./todo.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { string_unique } from "./string_unique.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_parse } from "./function_parse.mjs";
export async function app_new_existing(a) {
  let ast = await function_parse(a);
  let fnns = await functions_names();
  let a_new = string_unique(a, fnns);
  js_identifier_rename(ast, a, a_new);
  todo("this should also rename", fn_name);
  let body = js_declaration_single_body(ast);
  let lines = list_map(body, js_unparse);
  let body_string = list_join_semicolon(lines);
  let v = await app_new_generic(a_new, body_string);
  return a_new;
}
