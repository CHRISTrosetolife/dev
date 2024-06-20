import { app_gs_tiles } from "./app_gs_tiles.mjs";
import { app_gs_menu_system_logs } from "./app_gs_menu_system_logs.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_element } from "./html_element.mjs";
export function app_gs_menu_main(menu_overlay) {
  html_clear(menu_overlay);
  html_button_width_full_text_click(menu_overlay, "back", () => {
    html_remove(menu_overlay);
  });
  html_button_width_full_text_click(menu_overlay, "system logs", () => {
    app_gs_menu_system_logs(menu_overlay);
  });
  html_button_width_full_text_click(menu_overlay, "tiles", () => {
    html_clear(menu_overlay);
    html_button_width_full_text_click(menu_overlay, "back", () => {
      app_gs_menu_main(menu_overlay);
    });
    let container = html_element(menu_overlay);
    app_gs_tiles(menu_overlay);
  });
}
