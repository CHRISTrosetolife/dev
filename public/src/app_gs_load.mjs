import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { app_gs_map_render } from "./app_gs_map_render.mjs";
import { app_gs_player_c } from "./app_gs_player_c.mjs";
import { html_scrollable_hide } from "./html_scrollable_hide.mjs";
import { app_gs_map_html } from "./app_gs_map_html.mjs";
import { app_gs_map_new } from "./app_gs_map_new.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_gs_player_new } from "./app_gs_player_new.mjs";
import { app_gs } from "./app_gs.mjs";
import { storage_local_initialize_lambda } from "./storage_local_initialize_lambda.mjs";
import { html_remove } from "./html_remove.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export async function app_gs_load(context) {
  let game = storage_local_initialize_lambda(app_gs, "game", () => {
    let game = {};
    let player = app_gs_player_new();
    object_merge(game, {
      player,
    });
    let map = app_gs_map_new(game);
    object_merge(player, map.spawn);
    object_merge(game, {
      maps: [map],
    });
    return game;
  });
  object_merge(context, {
    game,
  });
  context.map = context.game.maps[context.game.player.map];
  let keys = ["map_c", "player_c"];
  each(keys, (item) => {
    if (object_property_exists(context, item)) {
      html_remove(object_property_get(context, item));
    }
  });
  context.map_c = app_gs_map_html(context);
  html_scrollable_hide(context);
  context.player_c = app_gs_player_c(context);
  context.html = [];
  app_gs_map_render(context, [context.game.player]);
  await html_scroll_center_smooth(context.player_c);
}
