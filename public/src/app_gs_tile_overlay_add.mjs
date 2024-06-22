import { list_add } from "./list_add.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_xy } from "./list_xy.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
export function app_gs_tile_overlay_add(tile, type) {
  let o = object_properties_new(tile, list_xy());
  object_merge(o, {
    type,
  });
  list_add(tile.overlays, o);
  return o;
}
