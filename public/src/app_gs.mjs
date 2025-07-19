import { html_localhost_is } from "./html_localhost_is.mjs";
import { html_script_axios } from "./html_script_axios.mjs";
import { app_gs_game_delete } from "./app_gs_game_delete.mjs";
import { app_gs_load } from "./app_gs_load.mjs";
import { object_merge } from "./object_merge.mjs";
import { html_style_button_default_value } from "./html_style_button_default_value.mjs";
import { html_scale_none } from "./html_scale_none.mjs";
import { app_gs_style_default_initialize } from "./app_gs_style_default_initialize.mjs";
export async function app_gs() {
  history.scrollRestoration = "manual";
  let root = app_gs_style_default_initialize();
  let c = await html_script_axios(root);
  let context = {};
  object_merge(context, {
    root,
  });
  let d = html_style_button_default_value();
  object_merge(d, {
    "margin-left": "0",
    "margin-right": "0",
  });
  if (!html_localhost_is()) {
    html_scale_none();
  }
  if (0) {
    app_gs_game_delete();
  }
  await app_gs_load(context);
}
