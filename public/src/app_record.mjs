import { object_merge } from "./object_merge.mjs";
import { html_recorder_media } from "./html_recorder_media.mjs";
import { app_record_home } from "./app_record_home.mjs";
import { firebase_auth } from "./firebase_auth.mjs";
import { app_record_login } from "./app_record_login.mjs";
import { firebase_initialize } from "./firebase_initialize.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export async function app_record() {
  let root = html_style_default_initialize();
  await html_script_axios(root);
  firebase_initialize();
  let auth = firebase_auth();
  onAuthStateChanged(auth, async (user) => {
    html_clear_scroll_top(root);
    if (user) {
      let context = {};
      context.mr = await html_recorder_media();
      object_merge(context, {
        root,
      });
      await app_record_home(context);
    } else {
      app_record_login(root);
    }
  });
}
