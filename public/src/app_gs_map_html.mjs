import { html_style } from "./html_style.mjs";
import { html_style_height } from "./html_style_height.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { html_div } from "./html_div.mjs";
export function app_gs_map_html(root, map) {
  let map_c = html_div(root);
  html_style_width(map_c, game_tile_units_css(map.columns));
  html_style_height(map_c, game_tile_units_css(map.rows));
  html_style(map_c, {
    overflow: "hidden",
    position: "relative",
    display: "inline",
  });
  return map_c;
}
