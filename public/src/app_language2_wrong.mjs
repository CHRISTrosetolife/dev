import { object_property_set } from "./object_property_set.mjs";
export function app_language2_wrong(context, v, gap_initial, wait_initial) {
  object_property_set(v, "gap", gap_initial);
  object_property_set(v, "wait", wait_initial);
}
