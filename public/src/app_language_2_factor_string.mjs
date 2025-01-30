import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_language_2_factor_string(f) {
  return string_combine_multiple([
    object_property_get(f, "factor"),
    "@",
    object_property_get(f, "threshold"),
  ]);
}
