import { app_language_2_factor_value_default } from "./app_language_2_factor_value_default.mjs";
import { list_add } from "./list_add.mjs";
import { app_language_2_factor_new } from "./app_language_2_factor_new.mjs";
import { app_language_2_factor_sort } from "./app_language_2_factor_sort.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { number_is } from "./number_is.mjs";
export function app_language_2_factor_get(context) {
  let app_fn = object_property_get(context, "app_fn");
  let factors = storage_local_initialize(
    app_fn,
    "factor",
    app_language_2_factor_value_default(),
  );
  if (number_is(factors)) {
    let factor = factors;
    let threshold = 0;
    factors = [];
    list_add(factors, app_language_2_factor_new(threshold, factor));
  }
  app_language_2_factor_sort(factors);
  return factors;
}
