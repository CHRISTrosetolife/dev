import { list_single } from "./list_single.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_size_1 } from "./list_size_1.mjs";
export function list_find_property_or(list, property_name, value, or_value) {
  let use_or = true;
  let npcs = list_filter_property(list, property_name, value);
  if (list_size_1(npcs)) {
    let npc = list_single(npcs);
    return npc;
  }
  if (use_or) {
    return or_value;
  }
}
