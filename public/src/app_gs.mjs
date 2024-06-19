import { object_merge } from "./object_merge.mjs";
import { html_style_button_default_value } from "./html_style_button_default_value.mjs";
import { html_hostname } from "./html_hostname.mjs";
import { html_scale_none } from "./html_scale_none.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { html_style } from "./html_style.mjs";
import { app_gs_map_render } from "./app_gs_map_render.mjs";
import { app_gs_style_default_initialize } from "./app_gs_style_default_initialize.mjs";
import { app_gs_map_html } from "./app_gs_map_html.mjs";
import { app_gs_overlay_player } from "./app_gs_overlay_player.mjs";
import { app_gs_map_new } from "./app_gs_map_new.mjs";
export async function app_gs() {
  history.scrollRestoration = "manual";
  let root = app_gs_style_default_initialize();
  let d = html_style_button_default_value();
  object_merge(d, {
    margin: "0",
  });
  if (html_hostname() !== "localhost") {
    html_scale_none();
  }
  html_style(root, {
    overflow: "hidden",
  });
  let map = app_gs_map_new();
  let map_c = app_gs_map_html(root, map);
  let player_c = app_gs_overlay_player(map_c, map);
  map.html = [];
  app_gs_map_render(map, map_c, [map.player], player_c);
  await html_scroll_center_smooth(player_c);
}
