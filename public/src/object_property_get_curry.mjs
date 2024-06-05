import { object_property_get } from "./object_property_get.mjs";
export function object_property_get_curry(property_name) {
  return (l) => object_property_get(l, property_name);
}
