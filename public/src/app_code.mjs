import { html_script_astring } from "./html_script_astring.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_script_acorn } from "./html_script_acorn.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  html_script_acorn(root);
  html_script_astring(root);
}
