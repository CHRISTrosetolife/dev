import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { number_max_list_map_property } from "./number_max_list_map_property.mjs";
export function bible_words_score_generic(definitions) {
  let max = number_max_list_map_property(definitions, "count");
  each(definitions, (d) => {
    let { count } = d;
    object_property_set(d, "score", (count / max) * 10000);
  });
}
