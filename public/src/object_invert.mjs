import { object_property_set } from "./object_property_set.mjs";
import { each_object } from "./each_object.mjs";
export function object_invert(object) {
  let inverted = {};
  each_object(object, (key, value) => {
    object_property_set(inverted, value, key);
  });
  return inverted;
}
