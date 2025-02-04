import { function_name_combine } from "./function_name_combine.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_username_get } from "./app_code_username_get.mjs";
import { app_code_username_exists } from "./app_code_username_exists.mjs";
import { app_code_refresh_main } from "./app_code_refresh_main.mjs";
import { storage_local_remove } from "./storage_local_remove.mjs";
import { app_code } from "./app_code.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_clear_scroll_top_centered_context } from "./html_clear_scroll_top_centered_context.mjs";
import { app_code_refresh_functions } from "./app_code_refresh_functions.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export function app_code_refresh_menu(context) {
  let prefix = function_name_combine(fn_name("app_code"), "refresh", "");
  let suffix = string_prefix_without(fn_name("app_code_refresh_menu"));
  storage_local_set(app_code, "screen", suffix);
  let root = html_clear_scroll_top_centered_context(context);
  html_button_width_full_text_click(root, "Functions", async () => {
    await app_code_refresh_functions(context);
  });
  if (app_code_username_exists()) {
    html_button_width_full_text_click(
      root,
      string_combine_multiple(["Log out: ", app_code_username_get()]),
      () => {
        storage_local_remove(app_code, "username");
        app_code_refresh_main(context);
      },
    );
  }
}
