import { html_script_adsense } from "./html_script_adsense.mjs";
import { app_context_books_bible } from "./app_context_books_bible.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { app_memorize_frame } from "./app_memorize_frame.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_style } from "./html_style.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_memorize() {
  let save = storage_local_initialize(app_memorize, "save", {});
  let context = {
    style: {},
    save,
  };
  context.settings = true;
  let root = html_style_default_initialize();
  await html_script_axios(root);
  await app_context_books_bible(context);
  html_style(root, {
    margin: "0",
  });
  object_merge(context, {
    root,
  });
  await app_memorize_frame(context);
  html_script_adsense();
}
