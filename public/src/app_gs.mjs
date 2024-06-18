import { log } from "./log.mjs";
import { html_scale_none } from "./html_scale_none.mjs";
import { noop } from "./noop.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { html_style } from "./html_style.mjs";
import { app_gs_map_render } from "./app_gs_map_render.mjs";
import { app_gs_style_default_initialize } from "./app_gs_style_default_initialize.mjs";
import { app_gs_map_html } from "./app_gs_map_html.mjs";
import { app_gs_overlay_player } from "./app_gs_overlay_player.mjs";
import { app_gs_map_new } from "./app_gs_map_new.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { sleep } from "./sleep.mjs";
export async function app_gs() {
  let root = app_gs_style_default_initialize();
  html_button_width_full_text_click(root, "menu", noop);
  html_scale_none();
  if (0) {
    html_style(root, {
      overflow: "hidden",
    });
  }
  console.log(window.location.hostname);
  let map = app_gs_map_new();
  let map_c = app_gs_map_html(root, map);
  let player_overlay = app_gs_overlay_player(map_c, map);
  map.html = [];
  app_gs_map_render(map, map_c, [map.player], player_overlay);
  await sleep(100);
  html_scroll_center_smooth(player_overlay);
}
