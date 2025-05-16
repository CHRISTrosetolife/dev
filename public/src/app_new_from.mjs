import { function_declaration } from "./function_declaration.mjs";
import { app_identifier } from "./app_identifier.mjs";
import { app_new_generic } from "./app_new_generic.mjs";
export async function app_new_from(name_new, name_existing) {
  let name_existing_prefixed = app_identifier(name_existing);
  let d = await function_declaration(name_existing_prefixed);
  let v2 = d;
  return v2;
  let body_string = "let root = html_style_default_initialize();";
  let v = await app_new_generic(name_new, body_string, false);
  return v;
}
