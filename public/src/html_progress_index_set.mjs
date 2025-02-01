import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { add_1 } from "./add_1.mjs";
import { number_locale } from "./number_locale.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function html_progress_index_set(result, index) {
  html_inner_set(
    object_property_get(result, "text_index"),
    number_locale(add_1(index)),
  );
  object_property_set(result, "index", index);
}
