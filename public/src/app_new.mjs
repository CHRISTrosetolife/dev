import { app_new_generic } from "./app_new_generic.mjs";
export async function app_new(name) {
  let body_string = "let root = html_style_default_initialize();";
  let v = await app_new_generic(name, body_string);
  return v;
}
