import { log } from "./log.mjs";
export function object_property_exists(object, property_name) {
  log({
    object,
    property_name,
  });
  return Object.hasOwnProperty.bind(object)(property_name);
}
