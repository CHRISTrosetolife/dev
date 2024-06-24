import { app_gs_load } from "./app_gs_load.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
import { object_merge } from "./object_merge.mjs";
import { html_style_button_default_value } from "./html_style_button_default_value.mjs";
import { html_hostname } from "./html_hostname.mjs";
import { html_scale_none } from "./html_scale_none.mjs";
import { app_gs_style_default_initialize } from "./app_gs_style_default_initialize.mjs";
export async function app_gs() {
  history.scrollRestoration = "manual";
  let context = {};
  let root = app_gs_style_default_initialize();
  object_merge(context, {
    root,
  });
  let d = html_style_button_default_value();
  object_merge(d, {
    "margin-left": "0",
    "margin-right": "0",
  });
  if (html_hostname() !== "localhost") {
    html_scale_none();
  }
  if (0) {
    storage_local_remove(app_gs, "game");
  }
  await app_gs_load(context);
}
