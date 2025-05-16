import { object_property_get } from "./object_property_get.mjs";
import { function_declaration } from "./function_declaration.mjs";
import { app_identifier } from "./app_identifier.mjs";
import { app_new_generic } from "./app_new_generic.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function app_new_from(name_existing, name_new) {
  let name_existing_prefixed = app_identifier(name_existing);
  let d = await function_declaration(name_existing_prefixed);
  let body = object_property_get(d, "body");
  let body2 = object_property_get(body, "body");
  let v2 = d;
  let v3 = js_unparse(body);
  return v3;
  let body_string = "let root = html_style_default_initialize();";
  let v = await app_new_generic(name_new, body_string, false);
  return v;
}
