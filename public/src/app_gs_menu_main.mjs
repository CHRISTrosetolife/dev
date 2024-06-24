import { app_gs_menu_pray } from "./app_gs_menu_pray.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { app_gs_menu_tiles } from "./app_gs_menu_tiles.mjs";
import { app_gs_menu_system_logs } from "./app_gs_menu_system_logs.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_gs_menu_main(context, menu_overlay) {
  html_clear(menu_overlay);
  html_button_width_full_text_click_back(menu_overlay, () => {
    html_remove(menu_overlay);
  });
  html_button_width_full_text_click(menu_overlay, "🙏 pray", () => {
    app_gs_menu_pray(menu_overlay, map_c, map);
  });
  html_button_width_full_text_click(menu_overlay, "💻 system logs", () => {
    app_gs_menu_system_logs(menu_overlay, map_c, map);
  });
  html_button_width_full_text_click(menu_overlay, "🟩 tiles", () => {
    app_gs_menu_tiles(menu_overlay, map_c, map);
  });
}
