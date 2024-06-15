import { app_gs_style_default_initialize } from "./app_gs_style_default_initialize.mjs";
import { app_gs_map_html } from "./app_gs_map_html.mjs";
import { app_gs_overlay_player } from "./app_gs_overlay_player.mjs";
import { app_gs_map_onclick } from "./app_gs_map_onclick.mjs";
import { app_gs_map_new } from "./app_gs_map_new.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { each_range } from "./each_range.mjs";
export function app_gs() {
  let root = app_gs_style_default_initialize();
  let map = app_gs_map_new();
  let map_c = app_gs_map_html(root, map);
  let player_overlay = app_gs_overlay_player(map_c, map);
  each_range(map.rows, (r) => {
    each_range(map.columns, (c) =>
      app_gs_map_onclick(map, map_c, player_overlay, r, c),
    );
  });
  html_scroll_center_smooth(player_overlay);
}
