import { html_data_get } from "./html_data_get.mjs";
import { list_find } from "./list_find.mjs";
import { app_gs_map_html_at } from "./app_gs_map_html_at.mjs";
export function app_gs_map_html_at_find_multiple(map, npc, data_type) {
  let tile_cs = app_gs_map_html_at(map, npc);
  let npc_c = list_find(
    tile_cs,
    (tile_c) => html_data_get(tile_c, "type") === data_type,
  );
  return npc_c;
}
