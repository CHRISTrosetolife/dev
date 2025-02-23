import { app_code_refresh_menu } from "./app_code_refresh_menu.mjs";
import { html_button } from "./html_button.mjs";
export function app_code_button_menu_app(context, parent, on_click) {
  html_button(parent, "App menu", async function () {
    await on_click();
    await app_code_refresh_menu(context);
  });
}
