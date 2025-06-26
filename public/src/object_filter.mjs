import { object_property_set } from "./object_property_set.mjs";
import { each_object } from "./each_object.mjs";
export function object_filter(merged, predicate) {
  let result = {};
  each_object(merged, function (key, value) {
    let include = predicate(key, value);
    if (include) {
      object_property_set(result, key, value);
    }
  });
}
