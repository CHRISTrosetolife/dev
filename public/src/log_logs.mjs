import { log } from "./log.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function log_logs(g) {
  return object_property_initialize(g, log.name, []);
}
