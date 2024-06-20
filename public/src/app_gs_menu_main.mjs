import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_div } from "./html_div.mjs";
import { html_style } from "./html_style.mjs";
import { app_gs_tiles } from "./app_gs_tiles.mjs";
import { app_gs_menu_system_logs } from "./app_gs_menu_system_logs.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear } from "./html_clear.mjs";
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
    let container_outer = html_div(menu_overlay);
    let container_inner = html_div(container_outer);
    html_style_background_color(menu_overlay, "black");
    html_style(container_inner, {
      position: "relative",
    });
    html_style_centered(container_inner);
    html_style_width_full(container_inner);
    app_gs_tiles(container_inner);
  });
}
