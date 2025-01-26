import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_language2_gaps_get(context) {
  assert_arguments_length(arguments, 1);
  return object_property_get(context, "gaps");
}
