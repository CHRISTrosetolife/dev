import { object_property_set } from "./object_property_set.mjs";
import { number_is } from "./number_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
export function app_language_2_decrease_wait(values) {
  each(values, (v2) => {
    let wait = object_property_get(v2, "wait");
    if (number_is(wait)) {
      object_property_set(v2, "wait", wait - 1);
    }
  });
}
