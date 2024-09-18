import { html_scripts_load } from "./html_scripts_load.mjs";
export async function app_sandbox() {
  await html_scripts_load(root, ["axios"]);
}
