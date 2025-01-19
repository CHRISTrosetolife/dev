import { object_property_set } from "./object_property_set.mjs";
import { list_add } from "./list_add.mjs";
import { ceiling } from "./ceiling.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_size } from "./list_size.mjs";
export function app_language2_gaps_set(context, factor) {
  let w_size = list_size(object_properties(words));
  let gap = 0;
  let gaps = [0];
  while (gap < w_size) {
    gap = ceiling(gap * factor) + 1;
    list_add(gaps, gap);
  }
  list_add(gaps, w_size);
  object_property_set(context, "gaps", gaps);
}
