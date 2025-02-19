import { html_script_axios } from "./html_script_axios.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function html_style_default_initialize_axios() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  return root;
}
