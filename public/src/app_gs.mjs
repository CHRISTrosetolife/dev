import { app_gs_player_new } from "./app_gs_player_new.mjs";
import { storage_local_initialize_lambda } from "./storage_local_initialize_lambda.mjs";
import { app_gs_player_c } from "./app_gs_player_c.mjs";
import { html_scrollable_hide } from "./html_scrollable_hide.mjs";
import { object_merge } from "./object_merge.mjs";
import { html_style_button_default_value } from "./html_style_button_default_value.mjs";
import { html_hostname } from "./html_hostname.mjs";
import { html_scale_none } from "./html_scale_none.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { app_gs_map_render } from "./app_gs_map_render.mjs";
import { app_gs_style_default_initialize } from "./app_gs_style_default_initialize.mjs";
import { app_gs_map_html } from "./app_gs_map_html.mjs";
import { app_gs_map_new } from "./app_gs_map_new.mjs";
export async function app_gs() {
  history.scrollRestoration = "manual";
  let root = app_gs_style_default_initialize();
  let game = storage_local_initialize_lambda(app_gs.name, "game", () => {
    let game = {};
    let player = app_gs_player_new();
    let map = app_gs_map_new();
    object_merge(player, map.spawn);
    object_merge(game, {
      player,
      maps: [map],
    });
    return game;
  });
  let { maps } = game;
  let d = html_style_button_default_value();
  object_merge(d, {
    "margin-left": "0",
    "margin-right": "0",
  });
  if (html_hostname() !== "localhost") {
    html_scale_none();
  }
  let map_c = app_gs_map_html(root, map);
  html_scrollable_hide(root, map_c);
  let player_c = app_gs_player_c(map_c, map);
  map.html = [];
  app_gs_map_render(map, map_c, [map.player], player_c);
  await html_scroll_center_smooth(player_c);
}
