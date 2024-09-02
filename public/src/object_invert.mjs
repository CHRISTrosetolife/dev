import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
export function object_invert(object) {
  let inverted = {};
  each_object(object, (key, value) =>
    each(value, (value) => {
      let list_inverted = object_property_initialize(inverted, value, []);
      list_add(list_inverted, key);
    }),
  );
  return inverted;
}
