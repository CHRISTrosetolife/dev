import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_gs_overlays_at_list(tile) {
  return list_adder((la) => each(tile.overlays, la));
}
