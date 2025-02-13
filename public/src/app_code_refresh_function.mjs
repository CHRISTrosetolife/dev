import { html_button_back } from "./html_button_back.mjs";
import { html_overlay } from "./html_overlay.mjs";
import { emoji_lightning } from "./emoji_lightning.mjs";
import { app_code_file_contents } from "./app_code_file_contents.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_background_color_black } from "./html_style_background_color_black.mjs";
import { html_style } from "./html_style.mjs";
import { app_code_refresh_function_node } from "./app_code_refresh_function_node.mjs";
import { html_style_left } from "./html_style_left.mjs";
import { app_code_refresh_function_menu } from "./app_code_refresh_function_menu.mjs";
import { storage_local_recent_add } from "./storage_local_recent_add.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { js_parse } from "./js_parse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
export async function app_code_refresh_function(context) {
  await html_load(async function () {
    let root = app_code_screen_set(
      context,
      fn_name("app_code_refresh_function"),
    );
    html_style_left(root);
    let b = html_button(root, "Function menu", function () {
      app_code_refresh_function_menu(context);
    });
    html_style(b, {
      top: 0,
      position: "sticky",
    });
    let function_selected = storage_local_get_context(
      context,
      "function_selected",
    );
    let functions_recent_limit = 15;
    storage_local_recent_add(
      context,
      "functions_recent",
      function_selected,
      functions_recent_limit,
    );
    let path = function_name_to_path(function_selected);
    let contents = await app_code_file_contents(path);
    let ast = js_parse(contents);
    let container = html_div(root);
    html_style_background_color_black(container);
    html_style_rounded_padded(container);
    html_style_monospace(container);
    let button_bottom = html_button(root, emoji_lightning(), function () {
      let overlay = html_overlay(fn_name("app_code_refresh_function"));
      html_button_back(overlay);
    });
    html_style(button_bottom, {
      bottom: 0,
      position: "sticky",
    });
    html_style_display_none(button_bottom);
    app_code_refresh_function_node({
      parent: container,
      node: ast,
      data: {},
      ast,
      button_bottom,
    });
  });
}
