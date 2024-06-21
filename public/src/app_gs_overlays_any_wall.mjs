import { app_gs_overlay_wall_is } from "./app_gs_overlay_wall_is.mjs";
import { list_any } from "./list_any.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_overlays_any_wall(map, tile) {
  assert_arguments_length(arguments, 2);
  let os = tile.overlays;
  let w = list_any(os, app_gs_overlay_wall_is);
  return w;
}
