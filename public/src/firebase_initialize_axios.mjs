import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { firebase_initialize } from "./firebase_initialize.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
export async function firebase_initialize_axios() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  firebase_initialize();
  return root;
}
