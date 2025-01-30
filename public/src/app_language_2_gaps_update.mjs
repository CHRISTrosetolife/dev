import { app_language_2_words_get } from "./app_language_2_words_get.mjs";
import { app_language_2_factor_get } from "./app_language_2_factor_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_add } from "./list_add.mjs";
import { ceiling } from "./ceiling.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_size } from "./list_size.mjs";
export function app_language_2_gaps_update(context) {
  let factor = app_language_2_factor_get(context);
  let words = app_language_2_words_get(context);
  let w_size = list_size(object_properties(words));
  let gap = 0;
  let gaps = [0];
  while (gap < w_size * w_size) {
    gap = ceiling(gap * factor) + 1;
    list_add(gaps, gap);
  }
  object_property_set(context, "gaps", gaps);
}
