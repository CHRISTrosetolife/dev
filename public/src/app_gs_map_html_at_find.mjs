import { app_gs_map_html_at_find_multiple } from "./app_gs_map_html_at_find_multiple.mjs";
import { list_single } from "./list_single.mjs";
export function app_gs_map_html_at_find(map, npc, data_type) {
  let results = app_gs_map_html_at_find_multiple(map, npc, [data_type]);
  return list_single(results);
}
