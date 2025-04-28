import { object_property_get } from "./object_property_get.mjs";
export function window_location() {
  let v = object_property_get(window, "location");
  return v;
}
