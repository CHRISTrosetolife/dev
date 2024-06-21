import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { app_gs_walk } from "./app_gs_walk.mjs";
import { list_skip } from "./list_skip.mjs";
import { each_async } from "./each_async.mjs";
import { app_gs_map_render } from "./app_gs_map_render.mjs";
export async function app_gs_walk_path(map, map_c, player_c, path) {
  app_gs_map_render(map, map_c, path, player_c);
  await each_async(list_skip(path, 1), async (tile) => {
    await app_gs_walk(player_c, map.player, tile);
  });
  await html_scroll_center_smooth(player_c);
  app_gs_map_render(map, map_c, [map.player], player_c);
}
