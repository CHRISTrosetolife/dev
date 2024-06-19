import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
export function log(message) {
  let g = global_get();
  let logs = object_property_initialize(g, log.name, []);
  console.log(message);
}
