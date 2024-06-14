import { app_gs_sleep_time } from "./app_gs_sleep_time.mjs";
import { game_img_position } from "./game_img_position.mjs";
import { html_style } from "./html_style.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { html_style_height } from "./html_style_height.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function game_img_style(image, r, c, z_index) {
  let unit = game_tile_units_css(1);
  html_style_width(image, unit);
  html_style_height(image, unit);
  html_style(image, {
    position: "absolute",
    "z-index": z_index,
    transition: string_combine_multiple(["width ", app_gs_sleep_time(), "s"]),
  });
  game_img_position(image, r, c);
}
