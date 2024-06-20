import { app_gs_z_index } from "./app_gs_z_index.mjs";
import { subtract } from "./subtract.mjs";
import { game_img_position } from "./game_img_position.mjs";
import { html_style_height } from "./html_style_height.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { app_gs_screen_size } from "./app_gs_screen_size.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
export function app_gs_menu_overlay(map_c, map) {
  let menu = html_div(map_c);
  html_style(menu, {
    padding: game_tile_units_css(0.25),
  });
  html_style_background_color(menu, "rgba(1,1,1,0.25)");
  let { x_count, y_count } = app_gs_screen_size();
  html_style_width(menu, game_tile_units_css(x_count));
  html_style_height(menu, game_tile_units_css(y_count));
  html_style(menu, {
    position: "absolute",
    "z-index": app_gs_z_index("menu"),
  });
  let position_y = (y_count - 1) / 2;
  let position_x = (x_count - 1) / 2;
  game_img_position(
    menu,
    subtract(map.player.y, position_y),
    subtract(map.player.x, position_x),
  );
  return menu;
}
