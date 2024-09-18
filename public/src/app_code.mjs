import { html_script_axios } from "./html_script_axios.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
}
