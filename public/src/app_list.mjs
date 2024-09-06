import { app_list_root } from "./app_list_root.mjs";
import { app_list_choose } from "./app_list_choose.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_list() {
  let body = html_style_default_initialize();
  if (storage_local_exists(app_list, "list")) {
    app_list_choose(body);
  } else {
    app_list_root(body);
  }
}
