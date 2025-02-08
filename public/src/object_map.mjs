import { object_property_set } from "./object_property_set.mjs";
import { each_object } from "./each_object.mjs";
export function object_map(s, mapper) {
  let result = {};
  each_object(s, (key, value) => {
    let value_new = mapper(value, key);
    object_property_set(result, key, value_new);
  });
  return result;
}
