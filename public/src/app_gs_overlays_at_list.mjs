import { app_gs_overlays_at } from "./app_gs_overlays_at.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_gs_overlays_at_list(map, tile) {
  return list_adder((la) => app_gs_overlays_at(map, tile, la));
}
