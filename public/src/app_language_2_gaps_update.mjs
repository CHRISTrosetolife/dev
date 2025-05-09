import { list_filter_last } from "./list_filter_last.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language_2_words_size } from "./app_language_2_words_size.mjs";
import { app_language_2_factor_get } from "./app_language_2_factor_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_add } from "./list_add.mjs";
import { ceiling } from "./ceiling.mjs";
export function app_language_2_gaps_update(context) {
  let factors = app_language_2_factor_get(context);
  let w_size = app_language_2_words_size(context);
  let gap = 0;
  let gaps = [0];
  while (gap < w_size * w_size) {
    let f = list_filter_last(
      factors,
      (f) => object_property_get(f, "threshold") <= gap,
    );
    let factor = object_property_get(f, "factor");
    gap = ceiling(gap * factor) + 1;
    list_add(gaps, gap);
  }
  object_property_set(context, "gaps", gaps);
}
