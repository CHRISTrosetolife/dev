import { app_gs_overlays_wall } from "./app_gs_overlays_wall.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_gs_overlay_wall_is(o) {
  if (o.type === "base") {
    return list_includes(app_gs_overlays_wall(), o.id);
  }
}
