import { app_preach_main } from "./app_preach_main.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_preach() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  app_preach_main(root);
}
