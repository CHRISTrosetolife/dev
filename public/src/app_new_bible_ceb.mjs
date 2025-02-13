import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
import { todo } from "./todo.mjs";
import { string_unique } from "./string_unique.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_parse } from "./function_parse.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_new_generic } from "./app_new_generic.mjs";
export async function app_new_bible_ceb(name) {
  let a = fn_name("app_bible_ceb");
  let ast = await function_parse(a);
  let fnns = function_names();
  await function_transform(ast, function (ast) {
    let a_new = string_unique(a, fnns);
    js_identifier_rename(ast, a, a_new);
    todo("this should also rename", fn_name);
  });
  let b = js_declaration_single_body(ast);
  let v2 = b;
  return v2;
  let body_string = "let root = html_style_default_initialize();";
  let v = await app_new_generic(name, body_string);
  return v;
}
