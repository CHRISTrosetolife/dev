import { html_data_get } from "./html_data_get.mjs";
import { list_find } from "./list_find.mjs";
import { app_gs_map_html_at } from "./app_gs_map_html_at.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_gs_map_html_at_find_multiple(map, npc, data_types) {
  let tile_cs = app_gs_map_html_at(map, npc);
  let npc_c = list_find(tile_cs, (tile_c) =>
    list_includes(data_types, html_data_get(tile_c, "type")),
  );
  return npc_c;
}
