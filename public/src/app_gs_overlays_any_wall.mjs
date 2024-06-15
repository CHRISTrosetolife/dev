import { app_gs_overlay_wall_is } from "./app_gs_overlay_wall_is.mjs";
import { list_any } from "./list_any.mjs";
import { app_gs_overlays_at_list } from "./app_gs_overlays_at_list.mjs";
export function app_gs_overlays_any_wall(map, tile) {
  let os = app_gs_overlays_at_list(map, tile);
  let w = list_any(os, app_gs_overlay_wall_is);
  return w;
}
