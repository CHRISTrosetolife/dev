import { object_property_get } from "./object_property_get.mjs";
import { app_code_screen_suffix_get } from "./app_code_screen_suffix_get.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export function app_code_screen_set(context, this_fn_name) {
  let suffix = app_code_screen_suffix_get(context, this_fn_name);
  let property_name = "screen";
  let app_fn = object_property_get(context, "app_fn");
  storage_local_set(app_fn, property_name, suffix);
  let root = html_clear_scroll_top_centered_context(context);
  return root;
}
