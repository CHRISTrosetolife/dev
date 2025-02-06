import { each_index_1 } from "./each_index_1.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_code_functions_recent_get } from "./app_code_functions_recent_get.mjs";
import { app_code_button_menu_app } from "./app_code_button_menu_app.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_refresh_functions_recent(context) {
  let root = app_code_screen_set(
    context,
    fn_name("app_code_refresh_functions_recent"),
  );
  app_code_button_menu_app(context);
  let functions_recent = app_code_functions_recent_get(context);
  each_index_1(functions_recent, (fr, index) => {
    html_button(root, string_combine_multiple([fr]), () => {});
  });
}
