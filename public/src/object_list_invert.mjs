import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { each } from "./each.mjs";
import { each_object } from "./each_object.mjs";
export function object_list_invert(object) {
  let inverted = {};
  each_object(object, (key, list) =>
    each(list, (wd) => {
      let words = object_property_initialize(inverted, wd, []);
      list_add(words, key);
    }),
  );
  return inverted;
}
