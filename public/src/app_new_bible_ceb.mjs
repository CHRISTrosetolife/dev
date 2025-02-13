import { function_parse } from "./function_parse.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_new_generic } from "./app_new_generic.mjs";
export async function app_new_bible_ceb(name) {
  let ast = await function_parse(fn_name("app_bible_ceb"));
  function_transform_regular();
  let body_string = "let root = html_style_default_initialize();";
  let v = await app_new_generic(name, body_string);
  return v;
}
