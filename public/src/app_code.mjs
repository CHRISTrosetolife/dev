import { http_storage_get } from "./http_storage_get.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, ["axios", "acorn", "astring"]);
  await http_storage_get();
}
