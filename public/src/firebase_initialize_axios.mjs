import { firebase_initialize } from "./firebase_initialize.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
export async function firebase_initialize_axios(root) {
  await html_script_axios(root);
  firebase_initialize();
}
