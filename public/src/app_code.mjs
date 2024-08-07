import { object_property_set } from "./object_property_set.mjs";
import { global_get } from "./global_get.mjs";
import { app_code_download } from "./app_code_download.mjs";
import { html_root } from "./html_root.mjs";
import { html_style_height_full } from "./html_style_height_full.mjs";
import { html_style_margin_none } from "./html_style_margin_none.mjs";
import { html_hash_exists } from "./html_hash_exists.mjs";
import { app_code_edit } from "./app_code_edit.mjs";
import { html_hash } from "./html_hash.mjs";
import { app_code_search_function } from "./app_code_search_function.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { app_code_backable } from "./app_code_backable.mjs";
export async function app_code() {
  let global = global_get();
  object_property_set(global, "back_stack", []);
  let root = html_style_default_initialize();
  html_style_margin_none(root);
  let html = html_root();
  for (let e of [html, root]) {
    html_style_height_full(e);
  }
  await app_code_download();
  if (html_hash_exists()) {
    html_hash({
      function_name: (function_name) => {
        let p = function_name_to_path(function_name);
        app_code_backable(async () => await app_code_edit(p));
      },
    });
  } else {
    app_code_backable(() => app_code_search_function());
  }
}
