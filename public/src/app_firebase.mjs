import { app_record_login } from "./app_record_login.mjs";
import { firebase_auth } from "./firebase_auth.mjs";
import { firebase_initialize } from "./firebase_initialize.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_firebase(on_logged_in) {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  firebase_initialize();
  let auth = firebase_auth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await on_logged_in();
    } else {
      app_record_login(root);
    }
  });
  return root;
}
