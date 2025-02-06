import { object_property_delete } from "./object_property_delete.mjs";
export function js_value_string_set(expression, value) {
  expression.value = value;
  let property = "raw";
  object_property_delete(expression, property);
}
