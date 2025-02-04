import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_code_screen_prefix_get(context) {
  let app_fn = object_property_get(context, "app_fn");
  let prefix = function_name_combine_multiple([
    object_property_get(app_fn, "name"),
    "refresh",
    "",
  ]);
  return prefix;
}
