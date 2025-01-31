import { app_language_2_refresh_learn_value_choose_initial } from "./app_language_2_refresh_learn_value_choose_initial.mjs";
import { list_first_or } from "./list_first_or.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_first } from "./list_first.mjs";
import { list_sort_property } from "./list_sort_property.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_language_2_refresh_learn_value_choose(context) {
  let { values, values_skip_manual, max_indexes, values_all } =
    app_language_2_refresh_learn_value_choose_initial(context);
  list_sort_property(values, "wait");
  let wait_initial = 0;
  let gap_initial = 0;
  let v = list_first(values);
  let vw = object_property_get(v, "wait");
  let unlearning = list_filter_property(values, "learning", false);
  let learn_new = list_empty_not_is(unlearning) && (vw === null || vw > 0);
  let u = list_first_or(unlearning, null);
  return {
    v,
    values,
    values_skip_manual,
    max_indexes,
    wait_initial,
    gap_initial,
    values_all,
    learn_new,
    u,
  };
}
