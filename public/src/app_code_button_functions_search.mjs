import { object_property_get } from "./object_property_get.mjs";
import { app_code_refresh_functions } from "./app_code_refresh_functions.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_code_button_functions_search(context) {
  let root2 = object_property_get(context, "root");
  html_button_width_full_text_click(root, "Search Functions", async () => {
    await app_code_refresh_functions(context);
  });
}
