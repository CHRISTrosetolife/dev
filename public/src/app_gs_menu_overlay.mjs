import { game_img_style_generic } from "./game_img_style_generic.mjs";
import { subtract } from "./subtract.mjs";
import { app_gs_screen_size } from "./app_gs_screen_size.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs_menu_overlay(parent, map) {
  let menu = html_div(parent);
  html_style(menu, {
    padding: game_tile_units_css(0.25),
  });
  let alpha = 0.25;
  html_style_background_color(
    menu,
    string_combine_multiple(["rgba(1,1,1,", alpha, ")"]),
  );
  let { x_count, y_count } = app_gs_screen_size();
  let position_y = subtract(map.player.y, (y_count - 1) / 2);
  let position_x = subtract(map.player.x, (x_count - 1) / 2);
  game_img_style_generic(
    menu,
    y_count,
    x_count,
    "menu",
    position_y,
    position_x,
  );
  return menu;
}
