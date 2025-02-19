import { html_style_default_initialize_axios } from "./html_style_default_initialize_axios.mjs";
import { firebase_initialize } from "./firebase_initialize.mjs";
export async function firebase_initialize_axios() {
  let root = await html_style_default_initialize_axios();
  firebase_initialize();
  return root;
}
