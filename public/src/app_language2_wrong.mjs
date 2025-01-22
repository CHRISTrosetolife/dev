import { object_property_increment } from "./object_property_increment.mjs";
import { list_closest } from "./list_closest.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function app_language2_wrong(context, v, gap_initial, wait_initial) {
  object_property_set(v, "gap", gap_initial);
  object_property_set(v, "wait", wait_initial);
  let gap = object_property_get(v, "gap");
  let gaps = object_property_get(context, "gaps");
  let closest = list_closest(gaps, gap);
  let r = object_property_get(stats, "wrong");
  object_property_increment(r, closest);
}
