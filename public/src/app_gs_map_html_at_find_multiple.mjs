import { list_filter } from "./list_filter.mjs";
import { html_data_get } from "./html_data_get.mjs";
import { app_gs_map_html_at } from "./app_gs_map_html_at.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_gs_map_html_at_find_multiple(context, npc, data_types) {
  let tile_cs = app_gs_map_html_at(context, npc);
  let results = list_filter(tile_cs, (tile_c) =>
    list_includes(data_types, html_data_get(tile_c, "type")),
  );
  return results;
}
