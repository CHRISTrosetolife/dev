import { list_single } from "./list_single.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function list_find_property(list, property_name, value) {
  let npcs = list_filter_property(list, property_name, value);
  let npc = list_single(npcs);
  return npc;
}
