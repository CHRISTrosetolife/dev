import { app_code_refresh_menu } from "./app_code_refresh_menu.mjs";
import { html_button } from "./html_button.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_code_button_menu_app(context) {
  let root = object_property_get(context, "root");
  html_button(root, "App menu", async function () {
    await app_code_refresh_menu(context);
  });
}
