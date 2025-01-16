import { html_css_flags } from "./html_css_flags.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_language_initialize() {
  let body = html_style_default_initialize();
  await html_script_axios(body);
  html_css_flags(body);
  return body;
}
