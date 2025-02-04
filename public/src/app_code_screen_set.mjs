import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_code_screen_suffix_get } from "./app_code_screen_suffix_get.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
export function app_code_screen_set(context, this_fn_name) {
  let suffix = app_code_screen_suffix_get(context, this_fn_name);$ag
  let property_name = "screen";
  storage_local_set_context(context, property_name, suffix);
  let root = html_clear_scroll_top_centered_context(context);
  return root;
}
