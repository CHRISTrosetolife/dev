import { js_declaration_single_body } from "./js_declaration_single_body.mjs";
import { todo } from "./todo.mjs";
import { string_unique } from "./string_unique.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_parse } from "./function_parse.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_new_generic } from "./app_new_generic.mjs";
export async function app_new_bible_ceb() {
  let a = fn_name("app_bible_ceb");
  let ast = await function_parse(a);
  let fnns = function_names();
  let a_new = string_unique(a, fnns);
  await function_transform(ast, function (ast) {
    js_identifier_rename(ast, a, a_new);
    todo("this should also rename", fn_name);
  });
  let b = js_declaration_single_body(ast);
  let v2 = b;
  return v2;
  let v = await app_new_generic(a_new, body_string);
  return a_new;
}
