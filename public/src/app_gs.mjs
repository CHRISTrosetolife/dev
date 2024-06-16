import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { html_style } from "./html_style.mjs";
import { app_gs_map_render } from "./app_gs_map_render.mjs";
import { sleep } from "./sleep.mjs";
import { promise_all } from "./promise_all.mjs";
import { app_gs_style_default_initialize } from "./app_gs_style_default_initialize.mjs";
import { app_gs_map_html } from "./app_gs_map_html.mjs";
import { app_gs_overlay_player } from "./app_gs_overlay_player.mjs";
import { app_gs_map_new } from "./app_gs_map_new.mjs";
export async function app_gs() {
  let root = app_gs_style_default_initialize();
  html_style(root, {
    overflow: "hidden",
  });
  let map = app_gs_map_new();
  let map_c = app_gs_map_html(root, map);
  let player_overlay = app_gs_overlay_player(map_c, map);
  map.html = [];
  let tiles_new = await app_gs_map_render(
    map,
    map_c,
    [map.player],
    player_overlay,
  );
  await promise_all(tiles_new);
  await sleep(0);
  html_scroll_center_smooth(player_overlay);
}
