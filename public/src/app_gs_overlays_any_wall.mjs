import { app_gs_overlay_wall_is } from "./app_gs_overlay_wall_is.mjs";
import { list_any } from "./list_any.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal_by } from "./equal_by.mjs";
export function app_gs_overlays_any_wall(map, tile) {
  assert_arguments_length(arguments, 2);
  let w = list_any(tile.overlays, app_gs_overlay_wall_is);
  list_filter(map.overlays, (o) => equal_by(o, tile));
  return w;
}
