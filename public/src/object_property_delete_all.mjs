import { object_property_delete } from "./object_property_delete.mjs";
import { object_properties } from "./object_properties.mjs";
export function object_property_delete_all(object) {
  for (let property of object_properties(object)) {
    object_property_delete(object, property);
  }
}
