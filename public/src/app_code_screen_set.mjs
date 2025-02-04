import { app_code_screen_suffix_get } from "./app_code_screen_suffix_get.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { app_code } from "./app_code.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function app_code_screen_set(context, this_fn_name) {
  let suffix = app_code_screen_suffix_get(this_fn_name);
  storage_local_set(app_code, "screen", suffix);
  let root = html_clear_scroll_top_centered_context(context);
  return root;
}
