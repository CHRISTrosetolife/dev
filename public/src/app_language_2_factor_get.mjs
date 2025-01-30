import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { number_is } from "./number_is.mjs";
export function app_language_2_factor_get(context) {
  let app_fn = object_property_get(context, "app_fn");
  let factors = storage_local_initialize(app_fn, "factors", 1.5);
  if (number_is(factors)) {
    factors = [
      {
        threshold: 0,
        factor: factors,
      },
    ];
  }
  return factors;
}
