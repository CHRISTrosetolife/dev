import { app_gs_menu_system_logs } from "./app_gs_menu_system_logs.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_gs_menu_main } from "./app_gs_menu_main.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_gs_menu_pray(menu_overlay, map_c, map) {
  html_clear(menu_overlay);
  html_button_width_full_text_click_back(menu_overlay, () =>
    app_gs_menu_main(menu_overlay, map_c, map),
  );
  html_button_width_full_text_click(
    menu_overlay,
    "🙏 God, please bless my next 👥 conversation, in the name of Jesus, amen.",
    () => {
      app_gs_menu_system_logs(menu_overla, map_c, map);
    },
  );
}
