import { global_get } from "./global_get.mjs";
import { log } from "./log.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function log_logs() {
  let g = global_get();
  return object_property_initialize(g, log.name, []);
}
