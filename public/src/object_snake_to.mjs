import { object_property_set_strict } from "./object_property_set_strict.mjs";
import { string_snake_to } from "./string_snake_to.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { object_properties } from "./object_properties.mjs";
export function object_snake_to(k) {
  let result = {};
  let ps = object_properties(k);
  each(ps, function (p) {
    let v = object_property_get(k, p);
    let p_snake = string_snake_to(p);
    object_property_set_strict(result, p_snake, v);
  });
  return result;
}
