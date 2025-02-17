import { firebase_initialize } from "./firebase_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { global_function_initialize } from "./global_function_initialize.mjs";
import { file_rename_on_renames } from "./file_rename_on_renames.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_code_screen_prefix_get } from "./app_code_screen_prefix_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_suffix_get } from "./app_code_screen_suffix_get.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { function_run } from "./function_run.mjs";
import { html_div } from "./html_div.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_code() {
  if (false) {
    let g = global_function_initialize(app_code, function () {
      let v = {
        apps_list_name: fn_name("apps_list"),
      };
      return v;
    });
    let on_rename = function (file_name_from, file_name_to) {
      let apps_list_name = object_property_get(g, "apps_list_name");
    };
  }
  let on_renames = file_rename_on_renames();
  let body = html_style_default_initialize();
  let root = html_div(body);
  await html_scripts_load(body, [
    "axios",
    "acorn",
    "astring",
    "prettier_standalone",
    "prettier_parser_babel",
  ]);
  firebase_initialize();
  let app_fn = app_code;
  let context = {
    root,
    app_fn,
  };
  let suffix = app_code_screen_suffix_get(
    context,
    fn_name("app_code_refresh_main"),
  );
  let prefix = app_code_screen_prefix_get(context);
  let screen = storage_local_initialize(app_fn, "screen", suffix);
  let f = string_combine_multiple([prefix, screen]);
  await function_run(f, [context]);
}
