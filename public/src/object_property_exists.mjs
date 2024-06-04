import { log } from "./log.mjs";
export function object_property_exists(object, property_name) {
  log({
    object,
    property_name,
  });
  return Object.hasOwn(object, property_name);
}
