import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
import { app_code_refresh } from "./app_code_refresh.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, ["axios", "acorn", "astring"]);
  let context = {
    root,
  };
  if (storage_local_exists_not(app_code, "username")) {
    let root = html_clear_scroll_top_centered_context(context);
  } else {
    app_code_refresh(context);
  }
}
