import { firebase_download } from "./firebase_download.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_todo() {
  let body = html_style_default_initialize();
  await firebase_download("todo/list.json", []);
}
