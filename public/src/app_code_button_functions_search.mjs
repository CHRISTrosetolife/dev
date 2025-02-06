import { html_button } from "./html_button.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_code_refresh_functions } from "./app_code_refresh_functions.mjs";
export function app_code_button_functions_search(context) {
  let root = object_property_get(context, "root");
  html_button(root, "Search Functions", async () => {
    await app_code_refresh_functions(context);
  });
}
