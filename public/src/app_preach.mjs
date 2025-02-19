import { html_style_default_initialize_axios } from "./html_style_default_initialize_axios.mjs";
import { app_preach_main } from "./app_preach_main.mjs";
export async function app_preach() {
  let root = await html_style_default_initialize_axios();
  app_preach_main(root);
}
