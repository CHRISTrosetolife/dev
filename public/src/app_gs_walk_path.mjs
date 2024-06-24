import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { app_gs_walk } from "./app_gs_walk.mjs";
import { list_skip } from "./list_skip.mjs";
import { each_async } from "./each_async.mjs";
import { app_gs_map_render } from "./app_gs_map_render.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function app_gs_walk_path(context, path) {
  assert_arguments_length(arguments, 2);
  app_gs_map_render(context, path);
  await each_async(list_skip(path, 1), async (tile) => {
    await app_gs_walk(context, tile);
  });
  await html_scroll_center_smooth(player_c);
  app_gs_map_render(map, map_c, [map.player], player_c);
}
