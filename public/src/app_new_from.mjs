import { app_new_generic } from "./app_new_generic.mjs";
export async function app_new_from(name_new, name_existing) {
  let body_string = "let root = html_style_default_initialize();";
  let v = await app_new_generic(name_new, body_string, false);
  return v;
}
