import { app_language_2_gaps_update } from "./app_language_2_gaps_update.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_language_2_factor_sort } from "./app_language_2_factor_sort.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_language_2_factor_set(context, factors) {
  let app_fn = object_property_get(context, "app_fn");
  app_language_2_factor_sort(factors);
  debugger;
  storage_local_set(app_fn, "factor", factors);
  app_language_2_gaps_update(context);
}
