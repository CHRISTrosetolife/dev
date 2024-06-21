import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { app_gs_tiles } from "./app_gs_tiles.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
import { app_gs_menu_main } from "./app_gs_menu_main.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_gs_menu_tiles(menu_overlay, map_c, map) {
  html_clear(menu_overlay);
  html_button_width_full_text_click_back(menu_overlay, () => {
    app_gs_menu_main(menu_overlay, map_c, map);
  });
  let container = html_div(menu_overlay);
  html_style(container, {
    position: "relative",
  });
  html_style_centered(container);
  html_style_width_full(container);
  app_gs_tiles(container, map_c, map);
}
