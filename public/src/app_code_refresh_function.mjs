import { app_code_function_selected_get } from "./app_code_function_selected_get.mjs";
import { app_code_refresh_function_menu } from "./app_code_refresh_function_menu.mjs";
import { emoji_lightning } from "./emoji_lightning.mjs";
import { app_code_file_get } from "./app_code_file_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_overlay } from "./html_overlay.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_background_color_black } from "./html_style_background_color_black.mjs";
import { html_style } from "./html_style.mjs";
import { app_code_refresh_function_node } from "./app_code_refresh_function_node.mjs";
import { html_style_left } from "./html_style_left.mjs";
import { storage_local_recent_add } from "./storage_local_recent_add.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { js_parse } from "./js_parse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
import { html_div } from "./html_div.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
import { html_clear } from "./html_clear.mjs";
export async function app_code_refresh_function(context) {
  await html_load(async function () {
    let root = app_code_screen_set(
      context,
      fn_name("app_code_refresh_function"),
    );
    html_style_left(root);
    let function_selected = app_code_function_selected_get(context);
    let path = function_name_to_path(function_selected);
    let contents = await app_code_file_get(path);
    if (false) {
    }
    let ast = js_parse(contents);
    let args = {
      ast,
    };
    let button_menu = html_button(
      root,
      string_combine_multiple([emoji_lightning(), " Function menu"]),
      function () {
        let overlay = html_overlay(fn_name("app_code_refresh_function"));
        app_code_refresh_function_menu({
          overlay: overlay,
          args: args,
          ast: ast,
          context: context,
          path: path,
          refresh: refresh,
        });
      },
    );
    html_style(button_menu, {
      top: 0,
      position: "sticky",
    });
    let functions_recent_limit = 15;
    storage_local_recent_add(
      context,
      "functions_recent",
      function_selected,
      functions_recent_limit,
    );
    let container = html_div(root);
    html_style_background_color_black(container);
    html_style_rounded_padded(container);
    html_style_monospace(container);
    refresh();
    function refresh() {
      html_clear(container);
      app_code_refresh_function_node(
        object_merge_strict(args, {
          data: {},
          parent: container,
          node: ast,
        }),
      );
    }
  });
}
