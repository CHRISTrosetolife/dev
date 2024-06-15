import { app_gs_overlay_player } from "./app_gs_overlay_player.mjs";
import { app_gs_map_onclick } from "./app_gs_map_onclick.mjs";
import { app_gs_map_new } from "./app_gs_map_new.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style_height } from "./html_style_height.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { each_range } from "./each_range.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_div } from "./html_div.mjs";
export function app_gs() {
  let root = html_style_default_initialize();
  html_style(root, {
    margin: 0,
  });
  html_style_background_color(root, "black");
  let map = app_gs_map_new();
  let map_c = html_div(root);
  html_style_width(map_c, game_tile_units_css(map.columns));
  html_style_height(map_c, game_tile_units_css(map.rows));
  html_style(map_c, {
    overflow: "hidden",
    position: "relative",
    display: "inline",
  });
  let player_overlay = app_gs_overlay_player(map_c, map);
  each_range(map.rows, (r) => {
    html_style_height(map_c, game_tile_units_css(1));
    each_range(map.columns, (c) =>
      app_gs_map_onclick(map, map_c, player_overlay, r, c),
    );
  });
  html_scroll_center_smooth(player_overlay);
}
