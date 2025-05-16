import { app_identifier } from "./app_identifier.mjs";
import { app_new_generic } from "./app_new_generic.mjs";
export async function app_new_from(name_new, name_existing) {
  let name_new_prefixed = app_identifier(name_new);
  let body_string = "let root = html_style_default_initialize();";
  let v = await app_new_generic(name_new, body_string, false);
  return v;
}
