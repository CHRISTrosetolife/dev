import { object_list_invert } from "./object_list_invert.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_first } from "./list_first.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function app_language_upload_result(group, profile) {
  let words = list_adder_unique((la) =>
    each(group, (a) =>
      each(a, (pair) => {
        la(list_first(pair));
      }),
    ),
  );
  let definitions = {};
  each(words, (w) => {
    let ds = object_property_get(profile.definitions, w);
    object_property_set(definitions, w, ds);
  });
  let inverted = object_list_invert(definitions);
  let result_new = {
    group,
    definitions,
    inverted,
  };
  return result_new;
}
