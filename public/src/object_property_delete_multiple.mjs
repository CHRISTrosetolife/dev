import { object_property_delete } from "./object_property_delete.mjs";
import { each } from "./each.mjs";
export function object_property_delete_multiple(object, properties) {
  each(properties, (property) => {
    object_property_delete(object, property);
  });
}
