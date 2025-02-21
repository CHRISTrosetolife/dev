import { object_property_set } from "./object_property_set.mjs";
import { js_code_string } from "./js_code_string.mjs";
export function js_value_string_set(node, value) {
  object_property_set(node, "value", value);
  object_property_set(node, "raw", js_code_string(value));
}
